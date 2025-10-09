import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clone, TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { Subscription } from 'rxjs';
import { GuestWeddingListService } from 'src/app/services/guest-wedding-list.service';
import * as dashboardActions from '../../features/modules/dashboard/store/dashboard.actions';
import * as dashboardSelector from '../../features/modules/dashboard/store/dashboard.selectors';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'neight-tech-wedding-guest-list',
  templateUrl: './neight-tech-wedding-guest-list.component.html',
  styleUrls: ['./neight-tech-wedding-guest-list.component.scss'],
  standalone: false
})
export class NeightTechWeddingGuestListComponent implements OnInit {
  
  private readonly defaultPageLength = 15;
  private readonly defaultPage = 1;
  readonly itemsPerPageOptions: number[] = [10, 15, 20, 30, 50, 100];
  private selectedRows: number[] = [];
  private selectedGuests: string[] = [];
  searchValue = "";

  tableData$;

  // TODO translations
  translations = {
    ITEMS_PER_PAGE: 'ITEMS_PER_PAGE',
    OPEN_LIST_OF_OPTIONS: 'OPEN_LIST_OF_OPTIONS',
    BACKWARD: 'BACKWARD',
    FORWARD: 'FORWARD',
    TOTAL_ITEMS_UNKNOWN: 'TOTAL_ITEMS_UNKNOWN',
    TOTAL_ITEMS: 'TOTAL_ITEMS',
    TOTAL_ITEM: 'TOTAL_ITEM',
    OF_LAST_PAGES: 'OF_LAST_PAGES',
    OF_LAST_PAGE: 'OF_LAST_PAGES',
  };

  guestWeddingModel: TableModel = new TableModel();
  guests: TableModel = new TableModel();
  private guestsSubscription: Subscription | null = null;
  guestsToDeleted: string[] = [];

  dataSource: any;

  loadData$ = this.store.select(dashboardSelector.selectDashboard);
  
  constructor(
    private store: Store,
    private readonly translate: TranslateService,
    protected guestWeddingListService: GuestWeddingListService,

  ) {}

  ngOnInit(): void {
    this.guestWeddingModel.header = this.createTableHeader();
    this.guests.header = this.createTableHeader();
    this.guestWeddingModel.currentPage = this.defaultPage;
    this.guestWeddingModel.pageLength = this.defaultPageLength;
    this.store.dispatch(dashboardActions.loadDataDashboardState());
    this.loadData$.subscribe(res => {
      if (res) {
        this.dataSource = res;
        this.loadTableDatasource();
      }
    });
    this.initTableFiltering();

  }

  ngOnDestroy(): void {
    if (this.guestsSubscription !== null) {
      this.guestsSubscription.unsubscribe();
    }
  }

  private createTableHeader(): TableHeaderItem[] {
    return [
      new TableHeaderItem({data: this.translate.instant('GuestList.Name')}),
      new TableHeaderItem({data: this.translate.instant('GuestList.Status')}),
      new TableHeaderItem({data: this.translate.instant('GuestList.Date')}),
    ];
  }

  private loadTableDatasource() {
    if (this.dataSource.length !== 0) {
      this.guests.data = this.loadData();
      if (this.guests.data) {
        this.guestWeddingModel.data = this.guests.data;
        this.guestWeddingModel.totalDataLength = this.guests.data.length;
        this.selectPage(this.guestWeddingModel.currentPage);
      }
    }
  }

  private loadData(): TableItem[][] {
    if (this.dataSource) {
      return this.dataSource.map((guest) => [
        new TableItem({data: guest.name}),
        new TableItem({data: guest.attendanceStatus}),
        new TableItem({data: guest.date}),
      ])
    }
    return null;
  }

  selectPage(page: number): void {
    this.guestWeddingModel.currentPage = page;
    const offset = this.guestWeddingModel.pageLength * (page - 1);
    const pageRawData = this.guests.data.slice(offset, offset + this.guestWeddingModel.pageLength);
    this.guestWeddingModel.data = pageRawData;
  }

  // TODO seems not working
  sort(columnIndex: number) {
    if (this.guests.header[columnIndex].sorted) {
      this.guests.header[columnIndex].ascending = this.guests.header[columnIndex].descending;
      this.guestWeddingModel.header[columnIndex].ascending =
        this.guestWeddingModel.header[columnIndex].descending;
    }
    this.guestWeddingModel.data = [];
    this.guestWeddingModel.sort(columnIndex);
    this.guests.sort(columnIndex);

    this.selectPage(this.guestWeddingModel.currentPage);
  }

  cancel() {
    console.log("nothing to cancel");
  }

  registerManually() {
    console.log("nothing to register");
  }
  
  deleteGuests() {
    if (this.selectedGuests) {
      this.deleteGuestStore();
      this.selectedGuests = [];
    }
  }

  deleteGuestStore(): void {
    this.store.dispatch(
      dashboardActions.deleteGuestsFrom({
        guests: this.selectedGuests
      })
    );
  }

  downloadGuestList() {

  }

	onRowClick(index: number) {
		console.log("Row item selected:", index);
	}

	onSelectRow(index: any) {
    const dataTable = index?.model._data;
    const selectedRowType = index?.selectedRowIndex != undefined ? true : false;

    if (selectedRowType && dataTable) {
      const idx = this.selectedGuests.indexOf(dataTable[index?.selectedRowIndex][0].data);
      
      if (idx == -1) {
        this.selectedGuests.push(dataTable[index?.selectedRowIndex][0].data);
      }
    } else {
      const idx = this.selectedGuests.indexOf(dataTable[index?.deselectedRowIndex][0].data);
      this.selectedGuests.splice(idx, 1);
    }
	}

  initTableFiltering() {
    this.guestWeddingModel.isRowFiltered = (index: number) => {
			const nodeName = this.guestWeddingModel.row(index)[0].data;
			return !nodeName.toLowerCase().includes(this.searchValue.toLowerCase());
		};
  }

  filterNames(searchString: string) {
    this.searchValue = searchString;
	}
}

import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Store } from '@ngrx/store';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { Subscription } from 'rxjs';
import { GuestDTO } from 'src/app/dto/GuestDTO';
import { loadDataDashboardStateSuccess } from 'src/app/features/modules/dashboard/store/dashboard.actions';
import { DashboardState } from 'src/app/features/modules/store/dashboard.state';
import { mockGuests } from 'src/app/mock-data/mock-data.helper';
import { Guest } from 'src/app/models/guest';
import { FetchGuestService } from 'src/app/services/fetch-guest.service';
import { GuestWeddingListService } from 'src/app/services/guest-wedding-list.service';

@Component({
  selector: 'neight-tech-wedding-guest-list',
  templateUrl: './neight-tech-wedding-guest-list.component.html',
  styleUrls: ['./neight-tech-wedding-guest-list.component.scss']
})
export class NeightTechWeddingGuestListComponent implements OnInit, AfterContentChecked {
  
  private readonly defaultPageLength = 15;
  private readonly defaultPage = 1;
  readonly itemsPerPageOptions: number[] = [10, 15, 20, 30, 50, 100];

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

  dataSource: any;
  
  constructor(
    private store: Store,
    protected guestWeddingListService: GuestWeddingListService
  ) {}

  ngOnInit(): void {
    this.guestWeddingModel.header = this.createTableHeader();
    this.guests.header = this.createTableHeader();
    this.guestWeddingModel.currentPage = this.defaultPage;
    this.guestWeddingModel.pageLength = this.defaultPageLength;
    this.guestWeddingListService.fetchWeddingDashboardList().subscribe(response => {
      this.dataSource = response;
      this.store.dispatch(loadDataDashboardStateSuccess({ data: response }));
    });

    // TODO
    this.store.select(loadDataDashboardStateSuccess).subscribe((state: DashboardState) => {
      // this.tableViewState = this.stateWithConditions(
        //     this.tableView || defaultStates.tableView,
        //     this.condition
        // );
        // this.isLoaded = true;
        // console.warn("test store select", state, state.data, this.dataSource );
    });
  }


  ngAfterContentChecked(): void {
    if (this.guestsSubscription === null) {
      this.guests.data = this.loadData();
      if (this.guests.data) {
        this.guestWeddingModel.data = this.guests.data;
        this.guestWeddingModel.totalDataLength = this.guests.data.length;
        this.selectPage(this.guestWeddingModel.currentPage);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.guestsSubscription !== null) {
      this.guestsSubscription.unsubscribe();
    }
  }

  private createTableHeader(): TableHeaderItem[] {
    return [
      new TableHeaderItem({data: 'Name Guest'}),
      new TableHeaderItem({data: 'Status'}),
      new TableHeaderItem({data: 'Date'}),
    ];
  }

  private loadData(): TableItem[][] {
    let _guestServer = this.dataSource;
    if (_guestServer) {
      return _guestServer.map((guest) => [
        new TableItem({data: guest.name}),
        new TableItem({data: guest.guestAttendanceEnum}),
        new TableItem({data: guest.date}),
      ])
    }
    return null;
  }

  selectPage(page: number): void {
    const offset = this.guestWeddingModel.pageLength * (page - 1);
    const pageRawData = this.guests.data.slice(offset, offset + this.guestWeddingModel.pageLength);
    this.guestWeddingModel.data = pageRawData;
    this.guestWeddingModel.currentPage = page;
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
}

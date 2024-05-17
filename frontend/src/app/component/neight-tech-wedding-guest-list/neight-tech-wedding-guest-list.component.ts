import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { Subscription } from 'rxjs';
import { mockGuests } from 'src/app/mock-data/mock-data.helper';
import { Guest } from 'src/app/models/guest';

@Component({
  selector: 'neight-tech-wedding-guest-list',
  templateUrl: './neight-tech-wedding-guest-list.component.html',
  styleUrls: ['./neight-tech-wedding-guest-list.component.scss']
})
export class NeightTechWeddingGuestListComponent implements OnInit, AfterContentChecked {
  
  private readonly defaultPageLength = 15;
  private readonly defaultPage = 1;
  readonly itemsPerPageOptions: number[] = [10, 15, 20, 30, 50, 100];

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
  
  constructor(
  ) {}

  ngOnInit(): void {
    this.guestWeddingModel.header = this.createTableHeader();
    this.guests.header = this.createTableHeader();
    this.guestWeddingModel.currentPage = this.defaultPage;
    this.guestWeddingModel.pageLength = this.defaultPageLength;
  }


  ngAfterContentChecked(): void {
    if (this.guestsSubscription === null) {
      this.guests.data = this.loadData();
      if (this.guests.data) {
        this.guestWeddingModel.data = this.guests.data;
        this.guestWeddingModel.totalDataLength = mockGuests.length; // TODO change this
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
      new TableHeaderItem({data: 'id'}),
      new TableHeaderItem({data: 'name'}),
      new TableHeaderItem({data: 'contact'}),
      new TableHeaderItem({data: 'status'}),
      new TableHeaderItem({data: 'address'}),
    ];
  }

  private loadData(): TableItem[][] {
    let _guests: Guest[] = mockGuests;
    if (_guests) {
      return _guests.map((guest) => [
        new TableItem({data: guest.id}),
        new TableItem({data: guest.name}),
        new TableItem({data: guest.contact}),
        new TableItem({data: guest.status}),
        new TableItem({data: guest.address}),
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

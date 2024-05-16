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
  
  guestWeddingModel: TableModel = new TableModel();
  guests: TableModel = new TableModel();
  private guestsSubscription: Subscription | null = null;
  
  constructor(
  ) {}

  ngOnInit(): void {
    this.guestWeddingModel.header = this.createTableHeader();
    this.guests.header = this.createTableHeader();
  }


  ngAfterContentChecked(): void {
    if (this.guestsSubscription === null) {
      this.guests.data = this.loadData();
      if (this.guests.data) {
        this.guestWeddingModel.data = this.guests.data;
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
}

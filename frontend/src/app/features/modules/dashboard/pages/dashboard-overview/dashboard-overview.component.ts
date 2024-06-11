import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GuestWeddingListService } from 'src/app/services/guest-wedding-list.service';

@Component({
  selector: 'neight-tech-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {

  dragOver: boolean = false;

  constructor(
    private store: Store,
    protected guestWeddingListService: GuestWeddingListService
  ) {}

  ngOnInit(): void {
    console.log("Init Dashboard Overview");
  }

  onDragOver(event: any) {
    event.stopPropagation();
    event.preventDefault();
    console.warn("test dragOver");

    this.dragOver = true;
  }
  
  onDragLeave(event: any) {
    event.stopPropagation();
    event.preventDefault();
    
    this.dragOver = false;
  }

  enterGuestManuallyPopup(): void {
    console.log("enterGuestManuallyPopup");
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModalService } from 'carbon-components-angular';
import { GuestWeddingListService } from 'src/app/services/guest-wedding-list.service';
import { RegisterGuestDialogComponent } from '../../components/register-guest-dialog/register-guest-dialog.component';

@Component({
  selector: 'neight-tech-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {

  dragOver: boolean = false;

  constructor(
    private store: Store,
    protected guestWeddingListService: GuestWeddingListService,
    protected modalService: ModalService
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

  registerGuestManuallyPopup(): void {
    this.modalService.create({
      component: RegisterGuestDialogComponent,
      inputs: {
        modalText: "Hello universe.",
        newInput: true
      }
    });
  }

}

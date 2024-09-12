import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModalService } from 'carbon-components-angular';
import { GuestWeddingListService } from 'src/app/services/guest-wedding-list.service';
import { RegisterGuestDialogComponent } from '../../components/register-guest-dialog/register-guest-dialog.component';
import { FileItem } from 'src/app/models/file-item.model';

@Component({
  selector: 'neight-tech-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {

  @Output() addFiles = new EventEmitter<FileItem[]>();

  dragOver: boolean = false;
  accept = ['.pdf', '.doc', '.docx'];

  private maximumFileSize = 5 * 1024 * 1024;

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

  createFileItem(file: File): FileItem {
    const fileItem: FileItem = {
      id: null,
      uploaded: false,
      state: 'edit',
      invalid: false,
      invalidSize: false,
      name: file.name,
      file: file,
    };

    if (file.size > this.maximumFileSize) {
      fileItem.invalidSize = true;
    }

    return fileItem;
  }

  onDrop(event: any, external: boolean) {
    event.stopPropagation();
    event.preventDefault();

    const valid: boolean = this.checkFileAcceptenceOnDrag(event,  this.accept);

    if (valid) {
      this.addFiles.emit(
        Array.from(event.dataTransfer.files).map((file: any) => this.createFileItem(file))
      );
    }

    if (this.dragOver) {
      this.dragOver = !this.dragOver;
    }
  }

  checkFileAcceptenceOnDrag(event: any, acceptedFormats: string[]): boolean {
    const files: any = event.dataTransfer?.files;

    if (files && files.length !== 0) {
      const file = files[0];
      const fileExtension = file?.name?.split('.')[1];
      const valid = fileExtension ? acceptedFormats.indexOf(`.${fileExtension}`) : -1;
      return valid !== -1;
    } else {
      return false;
    }
  }

}

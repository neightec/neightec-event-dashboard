import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-neight-toast-template',
  templateUrl: './neight-toast-template.component.html',
  styleUrls: ['./neight-toast-template.component.scss']
})
export class NeightToastTemplateComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, protected toastService: ToastService) { }

  ngOnInit(): void {
  }

  closeSnackBar(): void {
    this.toastService.closeSnackBar();
  }

}

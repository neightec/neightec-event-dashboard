import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import { NeightToastTemplateComponent } from '../component/neight-toast-template/neight-toast-template.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) {
  }

  async showErrorToast(message: string, duration?: number, position?: MatSnackBarVerticalPosition): Promise<void> {
    this.snackBar.openFromComponent(NeightToastTemplateComponent, {
      verticalPosition: position ? position : ToastPosition.TOP,
      data: { icon: 'error_outline', message },
      panelClass: 'neight-toast-alert',
      duration: duration ? duration : 2000
    }).afterDismissed();
  }

  async showSuccessToast(message: string, duration?: number, position?: MatSnackBarVerticalPosition): Promise<void> {
    this.snackBar.openFromComponent(NeightToastTemplateComponent, {
      verticalPosition: position ? position : ToastPosition.TOP,
      data: { icon: 'check_circle_outline', message },
      panelClass: 'neight-toast-success',
      duration: duration ? duration : 2000
    }).afterDismissed();
  }

  closeSnackBar(): void {
    this.snackBar.dismiss();
  }
}

export enum ToastPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

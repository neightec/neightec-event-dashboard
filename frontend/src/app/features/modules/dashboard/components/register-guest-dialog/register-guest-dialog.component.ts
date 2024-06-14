import { AfterViewInit, Component, EventEmitter, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { BaseModal, ModalService } from 'carbon-components-angular';

@Component({
  selector: 'neight-tech-register-guest-dialog',
  templateUrl: './register-guest-dialog.component.html',
  styleUrls: ['./register-guest-dialog.component.scss']
})
export class RegisterGuestDialogComponent extends BaseModal implements OnInit {

  registerGuestEmpty: boolean = true;
  registerUserFormGroup: FormGroup;
  // registerGuestChanged = new EventEmitter<boolean>();
  data: boolean = false;
  enteredGuests: string[] = [];

  constructor(
    @Inject('newInput') public newInput: boolean,
    protected modalService: ModalService,
  ) {
    super();
  }

  ngOnInit(): void {
    if (!this.data && this.newInput) {
      this.registerUserFormGroup = new FormGroup(
        {
          registerUserFormControl: new FormControl({
            value: '',
            disabled: false,
          }),
        },
      );
      this.data = this.newInput; // prevent first from "Expression has changed after it was checked" Error
    }
  }

  // this.store.select -- detect any guest objects entered in modal

  registerGuests() {
    this.closeModal();
  }

  enterGuest() {
    if (this.registerUserFormGroup.get('registerUserFormControl').value) {
      const guest: string = this.registerUserFormGroup.get('registerUserFormControl').value;
      this.enteredGuests.push(guest);
      this.registerUserFormGroup.get('registerUserFormControl').setValue(null);
    }
  }

  showEnteredGuest(text: string) {
    return text
  }
}

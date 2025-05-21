import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-neight-tech-login',
  templateUrl: './neight-tech-login.component.html',
  styleUrls: ['./neight-tech-login.component.scss']
})
export class NeightTechLoginComponent implements OnInit {

  registerUserFormGroup: FormGroup;

  ngOnInit(): void {
    this.registerUserFormGroup = new FormGroup(
      {
        registerUserFormControl: new FormControl(
          {
            value: null,
            disabled: false,
          }
      ),
      },
    );
  }

  login() {
    console.warn("test lgin");
  }

}

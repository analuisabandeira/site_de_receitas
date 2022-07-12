import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormValidations } from 'src/app/shared/form-validations';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() label!: string;
  @Input() control?: FormControl;

  constructor() {}

  ngOnInit(): void {}

  get errorMessage() {
    for (const propertyName in this.control?.errors) {

      if (
        this.control?.errors.hasOwnProperty(propertyName) &&
        this.control.dirty
        ) {
  
        return FormValidations.getErrorMessage(
          this.label,
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }
    return null;
  }
}

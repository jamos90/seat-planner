import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  UntypedFormBuilder
} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  constructor(private fb: UntypedFormBuilder) {}

  createPropertyKeyChangeForm(): FormGroup {
    const formGroup = this.fb.group({
      guestNameKey: new FormControl(''),
      numberOfTables: new FormControl(0, Validators.required),
      tableType: new FormControl('', Validators.required)
    });
    return formGroup;
  }
}

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
      guestNameKey: new FormControl('')
    });
    return formGroup;
  }
}

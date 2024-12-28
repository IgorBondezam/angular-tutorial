import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

export interface CardFormType {
  id: FormControl<string>;
  name: FormControl<string>;
  value: FormControl<number>;
}

export class CardForm {

  public static createForm(builder: FormBuilder): FormGroup<CardFormType> {

    const id: FormControl = new FormControl('', [Validators.required]);
    const name: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
    const value: FormControl = new FormControl(0, [Validators.required, Validators.min(1)]);

    return builder.group({
      id,
      name,
      value
    });
  }
}

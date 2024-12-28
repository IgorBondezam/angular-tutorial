import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule
  ],
  template: `<label for="texto">{{ twoWayDataBindingTextValue }}</label><input [name]="'texto'" matInput [type]="'text'" [(ngModel)]="twoWayDataBindingTextValue">`
})
export class InputComponent {

  public twoWayDataBindingTextValue: string = '';

}

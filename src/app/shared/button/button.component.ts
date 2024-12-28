import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  template: `<button mat-raised-button color="primary" [type]="propertyBindingTypeButton" (click)="eventBindingButton('Event Binding')">{{ label }}</button>`,
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  public propertyBindingTypeButton: string = "button";

  @Input() label: string = 'Clique Aqui';

  public eventBindingButton(text: string) {
    console.log("Test " +  text);
  }


}

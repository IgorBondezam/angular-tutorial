import {Component, Input} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    NgIf
  ],
  template: `<p *ngIf="isToShow">Hello World!!</p>`
})
export class TextComponent {

  @Input() isToShow: boolean = true;

}

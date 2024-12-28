import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-angular-template',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './angular-template.component.html',
  styleUrl: './angular-template.component.css'
})
export class AngularTemplateComponent {

  @Input() normalElement: boolean = true;
}

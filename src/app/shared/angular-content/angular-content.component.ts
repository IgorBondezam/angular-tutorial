import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-angular-content',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './angular-content.component.html',
  styleUrl: './angular-content.component.css'
})
export class AngularContentComponent {
  @Input() exibirOutros: boolean = false;
}

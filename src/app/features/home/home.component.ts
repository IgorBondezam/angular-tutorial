import { Component } from '@angular/core';
import {ButtonComponent} from '../../shared/button/button.component';
import {InputComponent} from '../../shared/input/input.component';
import {TextComponent} from '../../shared/text/text.component';
import {AngularTemplateComponent} from '../../shared/angular-template/angular-template.component';
import {AngularContentComponent} from '../../shared/angular-content/angular-content.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    TextComponent,
    AngularTemplateComponent,
    AngularContentComponent
  ]
})
export class HomeComponent {

}

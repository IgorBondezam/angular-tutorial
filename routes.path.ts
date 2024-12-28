import {Routes} from "@angular/router";
import {HomeComponent} from './src/app/features/home/home.component';
import {CardFormComponent} from './src/app/features/card/card-form/card-form.component';
import {CardListComponent} from './src/app/features/card/card-list/card-list.component';
import {LifecycleComponent} from './src/app/features/lifecycle/lifecycle.component';

export const projectPath: Routes = [
  {
    path: "home",
    loadComponent: () => HomeComponent
  },
  {
    path: "card-form",
    loadComponent: () => CardFormComponent
  },
  {
    path: "card-list",
    loadComponent: () => CardListComponent
  },
  {
    path: "lifecycle",
    loadComponent: () => LifecycleComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
]

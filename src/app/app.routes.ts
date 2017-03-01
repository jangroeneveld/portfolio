import { Routes } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PersonalComponent }
];


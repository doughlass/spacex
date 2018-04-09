import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RocketComponent } from './page/rocket/rocket.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rockets/:id', component: RocketComponent },
];


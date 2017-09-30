import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

 const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

export const AppRouting = RouterModule.forRoot(routes);

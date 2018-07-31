import {Routes} from '@angular/router'

import {
  LocationsListComponent,
  LocationDetailsComponent,
  CreateLocationComponent,
  LocationRouteActivator,
  LocationListResolver
} from './locations/index'

import {Error404Component} from './errors/404.component';
import {UserModule} from './user/user.module';

export const appRoutes: Routes = [
  {path: 'locations', component: LocationsListComponent, resolve: {locations: LocationListResolver}},
  {path: 'locations/new', component: CreateLocationComponent, canDeactivate: ['canDeactivateCreateLocation']},
  {path: 'locations/:id', component: LocationDetailsComponent, canActivate: [LocationRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/locations', pathMatch: 'full'},
  {path: 'user', loadChildren: () => UserModule}
]

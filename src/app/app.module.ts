import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {
  LocationsListComponent,
  LocationThumbnailComponent,
  LocationService,
  LocationDetailsComponent,
  CreateLocationComponent,
  LocationRouteActivator,
  LocationListResolver
} from './locations/index'

import {InventoryAppComponent} from './inventory-app.component';
import {NavBarComponent} from './nav/nav-bar.component';
import {ToastrService} from './common/toastr.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';

@NgModule({
  declarations: [
    InventoryAppComponent,
    LocationsListComponent,
    LocationThumbnailComponent,
    LocationDetailsComponent,
    CreateLocationComponent,
    NavBarComponent,
    Error404Component
  ],
  providers: [
    LocationService,
    ToastrService,
    LocationRouteActivator,
    LocationListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateLocation',
      useValue: checkDirtyState
    }
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [InventoryAppComponent]
})
export class AppModule {
}

function checkDirtyState(component: CreateLocationComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}

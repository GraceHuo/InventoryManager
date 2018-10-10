import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  LocationsListComponent,
  LocationThumbnailComponent,
  LocationService,
  LocationDetailsComponent,
  CreateLocationComponent,
  CreateItemComponent,
  LocationRouteActivator,
  LocationListResolver,
  ItemListComponent
} from './locations/index';

import {InventoryAppComponent} from './inventory-app.component';
import {NavBarComponent} from './nav/nav-bar.component';
import {ToastrService} from './common/toastr.service';
import {CollapsibleWellComponent} from './common/collapsible-well.component';

import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {CapitalizeFirstLettersPipe} from './locations/shared/capitalizeFirstLetters.pipe';

@NgModule({
  declarations: [
    InventoryAppComponent,
    LocationsListComponent,
    LocationThumbnailComponent,
    LocationDetailsComponent,
    CreateLocationComponent,
    CreateItemComponent,
    NavBarComponent,
    ItemListComponent,
    CollapsibleWellComponent,
    Error404Component,
    CapitalizeFirstLettersPipe
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [InventoryAppComponent]
})
export class AppModule {
}

function checkDirtyState(component: CreateLocationComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}

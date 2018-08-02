import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {LocationService} from './shared/location.service';
import {map} from 'rxjs/operators';
@Injectable()
export class LocationListResolver implements Resolve<any> {
  constructor(private locationService: LocationService) {

  }

  resolve() {
    return this.locationService.getLocations().pipe(map(locations => locations));
  }
}

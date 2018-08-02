import {Router, CanActivate, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {LocationService} from '../shared/location.service';

@Injectable()
export class LocationRouteActivator implements CanActivate {
  constructor(private eventService: LocationService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getLocation(+route.params['id']);

    if (!eventExists)
      this.router.navigate(['/404']);
    return eventExists
  }
}

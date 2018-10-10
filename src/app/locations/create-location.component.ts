import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LocationService} from './shared/location.service';

@Component({
  templateUrl: 'create-location.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateLocationComponent {
  newLocation;
  isDirty: boolean = true;

  constructor(private router: Router, private locationService: LocationService) {

  }
  saveLocation (formValues) {
    this.locationService.saveLocation(formValues);
    this.isDirty = false;
    this.router.navigate(['/locations']);
  }

  cancel() {
    this.router.navigate(['/locations']);
  }
}

import {Component, Input} from '@angular/core';
import {ILocation} from './shared/index';

@Component({
  selector: 'location-thumbnail',
  template: `
    <div [routerLink]="['/locations', location.id]" class="well hoverwell thumbnail">
      <h2>Name: {{location.name}}</h2>
      <div *ngIf="location.description">Description: {{location.description}}</div>
    </div>`,
  styles: [`
    .thumbnail {
      min-height : 210px;
    }

    .well div {
      color : #bbb;
    }
  `]
})
export class LocationThumbnailComponent {
  @Input() location: ILocation;
}

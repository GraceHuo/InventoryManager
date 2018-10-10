import {Component, OnInit} from '@angular/core';
import {LocationService} from '../shared/location.service';
import {ActivatedRoute} from '@angular/router';
import {ILocation} from '../shared/index';
import {IItem} from '../shared/location.model';


@Component({
  templateUrl: './location-details.component.html',
  styles: [`
    .container {
      padding-left  : 20px;
      padding-right : 20px;
    }

    .event-image {
      height : 100px;
    }

    a {
      cursor : pointer;
    }
  `]
})
export class LocationDetailsComponent implements OnInit {
  location: ILocation;
  addMode: boolean;
  searchCriteria: string;
  sortBy = 'name';

  constructor(private locationService: LocationService, private route: ActivatedRoute) {

  }

  addItem() {
    this.addMode = true;
  }

  saveNewItem(item: IItem) {
    const nextId = Math.max.apply(null, this.location.items.map(i => i.id)) + 1;
    item.id = nextId;
    this.location.items.push(item);
    this.locationService.updateLocation(this.location);
    this.addMode = false;
  }

  cancelAddItem() {
    this.addMode = false;
  }

  ngOnInit() {
    this.location = this.locationService.getLocation(+this.route.snapshot.params['id']);
  }
}

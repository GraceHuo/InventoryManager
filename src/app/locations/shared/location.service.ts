import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ILocation} from './location.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LocationService {
  getLocations(): Observable<ILocation[]> {
    let subject = new Subject<ILocation[]>()
    setTimeout(() => {
      subject.next(LOCATIONS)
      subject.complete();
    }, 100);
    return subject;
  }

  getLocation(id: number) {
    return LOCATIONS.find(location => location.id === id)
  }

  saveLocation(location) {
    location.id = 999;
    location.items = [];
    LOCATIONS.push(location);
  }

  updateLocation(location) {
    let index = LOCATIONS.findIndex(x => x.id = location.id);
    LOCATIONS[index] = location;
  }
}

const LOCATIONS: ILocation[] = [
  {
    id: 1,
    name: 'Storage1',
    imageUrl: '/assets/images/angularconnect-shield.png',
    description: 'description1',
    items: [
      {
        id: 1,
        name: 'name1',
        description: 'desc',
        imageUrl: 'img1',
        categories: [0, 1],
        quantity: 10,
        price: 10
      },
      {
        id: 1,
        name: 'name2',
        description: 'desc2',
        imageUrl: 'img2',
        categories: [0, 1],
        quantity: 4,
        price: 60
      }
    ]
  },
  {
    id: 2,
    name: 'Storage2',
    imageUrl: '/assets/images/angularconnect-shield.png',
    description: 'description2',
    items: [
      {
        id: 1,
        name: 'name1',
        description: 'desc',
        imageUrl: 'img1',
        categories: [0, 1],
        quantity: 10,
        price: 10
      },
      {
        id: 1,
        name: 'name2',
        description: 'desc2',
        imageUrl: 'img2',
        categories: [0, 1],
        quantity: 4,
        price: 50
      }
    ]
  },
  {
    id: 3,
    name: 'Storage3',
    imageUrl: '/assets/images/angularconnect-shield.png',
    items: []
  }];

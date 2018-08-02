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
    console.log('location', location);
    location.id = 999;
    location.items = [];
    LOCATIONS.push(location);
  }
}

const LOCATIONS: ILocation[] = [
  {
    id: 1,
    name: 'Storage1',
    imageUrl: '/assets/images/angularconnect-shield.png',
    description: 'description1'
  },
  {
    id: 2,
    name: 'Storage2',
    imageUrl: '/assets/images/angularconnect-shield.png',
    description: 'description2'
  },
  {
    id: 3,
    name: 'Storage3',
    imageUrl: '/assets/images/angularconnect-shield.png'
  }];

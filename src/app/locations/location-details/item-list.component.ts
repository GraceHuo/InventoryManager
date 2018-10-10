import {Component, Input, OnChanges} from '@angular/core';
import {IItem} from '../shared/location.model';
import * as _ from 'lodash';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnChanges {
  @Input() items: IItem[];
  @Input() searchBy: string;
  @Input() sortBy: string;
  visibleItems: IItem[] = [];

  ngOnChanges(change) {
    if (change.searchBy && this.items) {
      this.searchItems(this.searchBy);
    }
    if (change.sortBy) {
      if (this.sortBy === 'name') {
        this.visibleItems.sort(sortByNameAsc);
      }
      if (this.sortBy === 'date') {
        this.visibleItems.sort(sortByDateDesc);
      }
    }
  }

  searchItems(searchBy) {
    if (!searchBy) {
      this.visibleItems = _.cloneDeep(this.items);
    } else {
      this.visibleItems = _.filter(this.items, item => {
        return _.includes(item.name, searchBy) || _.includes(item.description, searchBy);
      });
    }
  }
}

function sortByNameAsc(i1: IItem, i2: IItem) {
  if (i1.name > i2.name) {
    return 1;
  } else if (i1.name === i2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByDateDesc(i1: IItem, i2: IItem) {
  if (i1.createdDate > i2.createdDate) {
    return -1;
  } else if (i1.createdDate === i2.createdDate) {
    return 0;
  } else {
    return 1;
  }
}

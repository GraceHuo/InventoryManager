import {Component, Input} from '@angular/core';
import {IItem} from '../shared/location.model';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {
  @Input() items: IItem[];
}

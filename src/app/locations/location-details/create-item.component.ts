import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IItem} from '../shared/location.model';


@Component({
  templateUrl: './create-item.component.html',
  styles: [`
    em {
      float        : right;
      color        : #E05C65;
      padding-left : 10px;
    }

    .error input {
      background-color : #E3C3C5;
    }

    .error ::-webkit-input-placeholder {
      color : #999;
    }

    .error :-moz-placeholder {
      color : #999;
    }

    .error ::-moz-placeholder {
      color : #999;
    }

    .error :ms-input-placeholder {
      color : #999;
    }
  `]
})
export class CreateItemComponent implements OnInit {
  newItemForm: FormGroup;
  name: FormControl;
  description: FormControl;
  imageUrl: FormControl;
  categories: FormControl;
  quantity: FormControl;
  price: FormControl;

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.description = new FormControl('');
    this.imageUrl = new FormControl('');
    this.categories = new FormControl('');
    this.quantity = new FormControl(0, Validators.required);
    this.price = new FormControl(0);

    this.newItemForm = new FormGroup({
      name: this.name,
      description: this.description,
      imageUrl: this.imageUrl,
      categories: this.categories,
      quantity: this.quantity,
      price: this.price
    });
  }

  saveItem(formValues) {
    let item: IItem = {
      id: undefined,
      name: formValues.name,
      description: formValues.description,
      imageUrl: formValues.imageUrl,
      categories: formValues.categories,
      quantity: +formValues.quantity,
      price: +formValues.price
    };
    console.log(item);
  }
}

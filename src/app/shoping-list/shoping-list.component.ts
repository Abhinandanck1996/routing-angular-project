import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.module';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css'
})
export class ShopingListComponent {
ingredients:Ingredients[]=[
  new Ingredients('Apples',5),
  new Ingredients('Orange',10)
];
}

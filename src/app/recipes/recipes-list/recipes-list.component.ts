import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
recipes:Recipe[]=[
  new Recipe('A test Recipe', 'This is Simple a Test','https://cdn.pixabay.com/photo/2017/01/18/14/27/cake-1989956_1280.jpg')
];
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test' , 
    'https://cdn.pixabay.com/photo/2014/10/28/17/42/pizza-506919_960_720.jpg'),
    new Recipe('A Test Recipe', 'This is a simply a test' , 
    '../../../assets/image/pizza.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}

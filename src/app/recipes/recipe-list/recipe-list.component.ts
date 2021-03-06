import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', ' Test description',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MTAUcHgLXtjNac-XOYfV7Mz7hiYOzB5rv4k7skJXXN47duDTbQ');
  ]  ;

  constructor() { }

  ngOnInit() {
  }

}

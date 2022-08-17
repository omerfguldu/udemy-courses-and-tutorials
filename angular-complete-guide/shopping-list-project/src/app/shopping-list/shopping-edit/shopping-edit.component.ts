import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}
  // @ViewChild('nameInput') nameInputRef: ElementRef;

  addNewItem(name, amount) {
    this.shoppingListService.addNewItem({ itemName: name, itemAmount: amount });
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = [
    'Arroz',
    'Feijão',
    'Macarrão',
    'Carne',
    'Frango',
    'Peixe',
    'Salada',
    'Batata',
    'Mandioca',
    'Farofa',
    'Purê',
  ];
  constructor() {}

  public foodList(): Array<string> {
    return this.list;
  }
}

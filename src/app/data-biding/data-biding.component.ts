import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public nome: string = 'GEKAS';
  public idade: number = 20;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;

  public urlImagem: string =
    'https://angular.io/assets/images/logos/angular/angular.png';

  public imgTitle: string = 'Angular Logo';

  public imgAlt: string = 'Este é o logo do Angular';

  public postion: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {}

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent): void {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent): void {
    this.postion.x = valor.offsetX;
    this.postion.y = valor.offsetY;
  }
}

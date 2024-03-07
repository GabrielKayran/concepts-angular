import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'José', idade: 20 },
    { nome: 'Maria', idade: 30 },
    { nome: 'João', idade: 25 },
  ];

  public nome: string = 'ronaldo';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    }, 2000);
  }

  public onClick(): void {
    this.conditionClick = !this.conditionClick;
  }

  public onClickAddList(): void {
    this.list.push({ nome: 'Adicionado', idade: 40 });
  }

  public onClickEventList(event: number): void {
    this.list.splice(event, 1);
  }
}

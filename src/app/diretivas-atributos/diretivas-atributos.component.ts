import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public heightPx: string = '20px';
  public backgroundColor: string = 'red';
  public nome: string = '';
  public list: Array<{ nome: string }> = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'José' },
  ];
  public date: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
      this.heightPx = this.heightPx === '20px' ? '1px' : '2px';
      this.backgroundColor = this.backgroundColor === 'red' ? 'blue' : 'red';
    }, 2000);
  }

  public salvar(): void {
    this.list.push({ nome: this.nome });
    this.nome = '';
  }
}

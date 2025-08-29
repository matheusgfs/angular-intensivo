import { Component, OnInit } from '@angular/core';
interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Corte de Cabelo', cost: 4},
    {item: 'Barba', cost: 5},
    {item: 'Sobrancelha', cost: 2},
    {item: 'Shampoo', cost: 4},
    {item: 'Corta + Barba', cost: 25},
    {item: 'Corte na Tesoura', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }


  constructor() { }

  ngOnInit(): void {
  }

}

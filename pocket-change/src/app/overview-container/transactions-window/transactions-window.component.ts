import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-window',
  templateUrl: './transactions-window.component.html',
  styleUrls: ['./transactions-window.component.css']
})
export class TransactionsWindowComponent implements OnInit {
  transactions = [
    {
      title: 'Mcdonalds',
      date: new Date(),
      amount: 12.01
    },
    {
      title: 'Sonic',
      date: new Date(),
      amount: 12.85
    },
    {
      title: 'Arby\'s',
      date: new Date(),
      amount: 12.75
    }
  ];
  title = '';
  amount = 0;
  requestToAddNewTransaction = false;

  constructor() { }

  ngOnInit() {
  }

  transactionRequest() {
    this.requestToAddNewTransaction = true;
    return this.requestToAddNewTransaction;
  }

  addTransaction(event: any) {
    console.log(event);
    this.requestToAddNewTransaction = false;
    this.transactions.push({
      title: this.title,
      date: new Date(),
      amount: this.amount
    });
  }

  captureTitle(event: Event) {
    this.title = ( event.target as HTMLInputElement).value;
  }

  capturePrice(event: Event) {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
  }
}

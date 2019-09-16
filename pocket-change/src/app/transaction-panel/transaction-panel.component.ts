import { Component, OnInit, Input, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-transaction-panel',
  templateUrl: './transaction-panel.component.html',
  styleUrls: ['./transaction-panel.component.css']
})
export class TransactionPanelComponent implements OnInit {
  // set up a property to receive the data from app.ts that was bound to newRow property
  @Input() recentTransaction: {
    name: string,
    amount: number,
    category: string,
    date: string
  }[]; // needed me to put the empty square brackets after the closing curly brackets to get the error of not defining type to go away

  rowsArray = [];

  constructor() {}

  ngOnInit() {
    this.rowsArray = this.recentTransaction;
  }
}

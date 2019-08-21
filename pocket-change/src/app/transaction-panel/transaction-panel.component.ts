import { Component, OnInit, Input, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-transaction-panel',
  templateUrl: './transaction-panel.component.html',
  styleUrls: ['./transaction-panel.component.css']
})
export class TransactionPanelComponent implements OnInit {
  // set up a property to receive the data from app.ts that was bound to newRow property
  @Input() newRow: {
    name: string;
    amount: number;
    category: string;
    date: string;
  };

  rows = [];


  constructor() {}

  ngOnInit() {
    console.log(this.newRow);
    this.rows = this.newRow;
  }
  // isn't working yet. It looks like lines 10-15 are bringing in the data as expected, but line 30 pushes in the newRow and rewrites the
  // index each time a new transaction is created instead of adding the object to the next index in the rows array
  // the dummy index is in place consistently. The newRow getting pushed is index-1 no matter how many times I push it to the rows[]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // define the rowElement to any and set it up as an empty object
  rowElements = [];

  // gather data from control-panel.ts in the form of the object we were expecting to get and organize it to bind
  // to the new object rowElement
  onTransactionCreated(transactionData: {name: string, amount: number, category: string, date: string}) {
    this.rowElements.unshift( {
      name: transactionData.name,
      amount: transactionData.amount,
      category: transactionData.category,
      date: transactionData.date
    });
  }
}

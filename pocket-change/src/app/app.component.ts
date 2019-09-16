import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // define the rowElement to any and set it up as an empty object
  rowElements = [
    {
      name: 'First Management Co.',
      amount: 590.0,
      category: 'Rent',
      date: '01-04-2019'
    },
    {
      name: 'Walmart',
      amount: 238.89,
      category: 'Groceries',
      date: '06-13-2019'
    },
    {
      name: 'Car Payment',
      amount: 265.0,
      category: 'Car',
      date: '03-22-2019'
    },
    {
      name: 'Westar',
      amount: 53.23,
      category: 'Utilities',
      date: '06-20-2019'
    },
    {
      name: 'Yardhouse',
      amount: 45.06,
      category: 'Dining',
      date: '06-20-2019'
    },
    {
      name: 'Big O Tire Credit Card',
      amount: 31.0,
      category: 'Credit Card',
      date: '07-20-2019'
    },
    {
      name: 'Conoco',
      amount: 35.0,
      category: 'Gas',
      date: '08-15-2019'
    },
    {
      name: 'AMC Theaters',
      amount: 31.0,
      category: 'Entertainment',
      date: '09-11-2019'
    }
  ];

  graphData = [];

  // gather data from control-panel.ts in the form of the object we were expecting to get and organize it to bind
  // to the new object rowElement
  onTransactionCreated(transactionData: { name: string; amount: number; category: string; date: string; }) {
    this.rowElements.unshift({
      name: transactionData.name,
      amount: transactionData.amount,
      category: transactionData.category,
      date: transactionData.date
    });
    this.graphData = this.graphData.slice(); // had to make a copy of graphData, just like in NGX component to make sure OnChange fires
    this.graphData.push({
      name: transactionData.category,
      value: transactionData.amount
    });
    console.log('Data being sent to NGX from app: ' + JSON.stringify(this.graphData));
  }
}

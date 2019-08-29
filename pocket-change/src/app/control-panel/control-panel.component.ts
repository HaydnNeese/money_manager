import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  // set up the object to be sent to app.ts with this model
  @Output() newTransactionCreated = new EventEmitter<{
    name: string;
    amount: number;
    category: string;
    date: string;
  }>();

// we use two-way databinding to set these to be created and read with just a few lines of code
transaction = {
  name: '',
  amount: 0,
  category: '',
  date: ''
};

  // when the submit button is clicked the model is used to organize the data and emit it from this file to the app.ts file
  onNewTransactionCreated() {
    this.newTransactionCreated.emit({
      name: this.transaction.name,
      amount: this.transaction.amount,
      category: this.transaction.category,
      date: this.transaction.date
    });
    this.transaction.name = '';
    this.transaction.amount = 0;
    this.transaction.category = '';
    this.transaction.date = '';
  }

  constructor() {}

  ngOnInit() {}
}

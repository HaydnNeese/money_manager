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
  // empty variables that are assigned values by the functions below and will be put in the object above
  newName = '';
  newAmount = 0;
  newCategory = '';
  newDate = '';

  // the following four functions grab the event data to fill the empty variables on the input events
  onUpdateNewTransactionName(event: any) {
    this.newName = (event.target as HTMLInputElement).value;
  }
  onUpdateNewTransactionAmount(event: any) {
    this.newAmount = parseFloat((event.target as HTMLInputElement).value);
  }
  onUpdateNewTransactionCategory(event: any) {
    this.newCategory = (event.target as HTMLInputElement).value;
  }
  onUpdateNewTransactionDate(event: any) {
    this.newDate = (event.target as HTMLInputElement).value;
  }

  // when the submit button is clicked the model is used to organize the data and emit it from this file to the app.ts file
  onNewTransactionCreated() {
    this.newTransactionCreated.emit({
      name: this.newName,
      amount: this.newAmount,
      category: this.newCategory,
      date: this.newDate
    });
  }

  constructor() {}

  ngOnInit() {}
}

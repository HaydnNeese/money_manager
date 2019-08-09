import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { BudgetPanelComponent } from './budget-panel/budget-panel.component';
import { TransactionPanelComponent } from './transaction-panel/transaction-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ControlPanelComponent,
    BudgetPanelComponent,
    TransactionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

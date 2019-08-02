import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TransactionsWindowComponent } from './overview-container/transactions-window/transactions-window.component';
import { BudgetWindowComponent } from './overview-container/budget-window/budget-window.component';
import { NotificationWindowComponent } from './overview-container/notification-window/notification-window.component';
import { CategoryWindowComponent } from './overview-container/category-window/category-window.component';
import { OverviewContainerComponent } from './overview-container/overview-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionsWindowComponent,
    BudgetWindowComponent,
    NotificationWindowComponent,
    CategoryWindowComponent,
    OverviewContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

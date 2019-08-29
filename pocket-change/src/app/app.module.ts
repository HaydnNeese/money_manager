import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { TransactionPanelComponent } from './transaction-panel/transaction-panel.component';
import { NgxChartComponent } from './ngx-chart/ngx-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ControlPanelComponent,
    TransactionPanelComponent,
    NgxChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersService } from "./common/orders.service";

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrdersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

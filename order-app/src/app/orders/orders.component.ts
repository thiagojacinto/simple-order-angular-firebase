import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../common/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  coffees = [
    'Americano',
    'Flat White',
    'Cappuccino',
    'Latte',
    'Espresso',
    'Machiato',
    'Mocha',
    'Hot Chocolate',
    'Tea',
  ];

  allOrders = [];

  constructor(public orderService: OrdersService) {}

  ngOnInit(): void {}

  addProduct = (product) => this.allOrders.push(product);

  removeProduct = (product) => {
    // this.allOrders.filter(el => el !== product);
    const index = this.allOrders.indexOf(product);
    if (index > -1) this.allOrders.splice(index,1);
  };
}

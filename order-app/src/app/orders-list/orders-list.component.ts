import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../common/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {
  coffeeOrders = [];

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {}

  getCoffeeOrders = this.orderService
    .getCoffeeOrders()
    .subscribe((ordersList) => {
      this.coffeeOrders = ordersList;
    });

  markCompleted(data) {
    this.orderService.updateCoffeeOrder(data)
  };

  deleteOrder(data) {
    this.orderService.removeCoffeeOrder(data);
  }
}

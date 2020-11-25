import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  form = new FormGroup({
    customerName: new FormControl(""),
    orderNumber: new FormControl(""),
    productOrder: new FormControl(""),
    completed: new FormControl("")
  });
}

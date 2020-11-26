import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({
    customerName: new FormControl(""),
    orderNumber: new FormControl(""),
    productOrder: new FormControl(""),
    completed: new FormControl("")
  });

  createCoffeeOrder(orderData) {
    // TODO
  }
}

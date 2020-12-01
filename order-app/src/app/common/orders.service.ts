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
    return new Promise((resolve,reject) => {
      this.firestore
        .collection("coffeOrders")
        .add(orderData)
        .then(
          (res) => resolve(),
          (err) => reject(err)
          );
    });
  }
}

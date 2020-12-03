import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  coffeeOrdersList = [];

  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    productOrder: new FormControl(''),
    completed: new FormControl(''),
  });

  createCoffeeOrder(orderData) {
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('coffeOrders')
        .add(orderData)
        .then(
          (res) => resolve(),
          (err) => reject(err)
        );
    });
  }

  getCoffeeOrders() {
    return this.firestore.collection('coffeOrders').snapshotChanges();
  }

  updateCoffeeOrder(orderData) {
    return this.firestore
      .collection('coffeOrders')
      .doc(orderData.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  removeCoffeeOrder = (orderData) => {
    return this.firestore
      .collection('coffeOrders')
      .doc(orderData.payload.doc.id)
      .delete();
  }
}

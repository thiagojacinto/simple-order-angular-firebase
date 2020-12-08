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
        .collection('coffeeOrders')
        .add(orderData)
        .then(
          (res) => resolve(),
          (err) => reject(err)
        );
    });
  }

  getCoffeeOrders() {
    return this.firestore.collection('coffeeOrders').snapshotChanges();
  }

  updateCoffeeOrder(orderData) {
    return this.firestore
      .collection('coffeeOrders')
      .doc(orderData.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  removeCoffeeOrder = (orderData) => {
    return this.firestore
      .collection('coffeeOrders')
      .doc(orderData.payload.doc.id)
      .delete();
  }
}

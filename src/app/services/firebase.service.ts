import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  collectionName = 'Items';

  constructor(private firestore: AngularFirestore) {}

  read_Items() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  /*
  create_Item(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }
  update_student(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_student(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }*/
}

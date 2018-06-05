import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
export interface parcheUsuario{nick:string,parche:string;}
@Injectable({
  providedIn: 'root'
})
export class ParcheUsuarioService {
  private itemsCollection: AngularFirestoreCollection<parcheUsuario>;
  parcheUsuario: Observable<parcheUsuario[]>;
  private itemDoc: AngularFirestoreDocument<parcheUsuario>;
  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<parcheUsuario>('parcheUsuario');
    this.parcheUsuario = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as parcheUsuario;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  ListaParcheU(){
    return this.parcheUsuario;
  }
  agregarParche(parch:parcheUsuario){
    this.itemsCollection.add(parch);
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
export interface parche{id:string,contra:string,descripcion:string,nombre:string,parcheCompleto:boolean,valorActual:number,
valorMinimo:number,valorObjetivo:number;}
@Injectable({
  providedIn: 'root'
})
export class ParcheServiceService {
  private itemsCollection: AngularFirestoreCollection<parche>;
  parche: Observable<parche[]>;
  private itemDoc: AngularFirestoreDocument<parche>;
  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<parche>('parche');
    this.parche = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as parche;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  ListaParche(){
    return this.parche;
  }
  agregarParche(parch:parche){
    this.itemsCollection.add(parch);
  }
}

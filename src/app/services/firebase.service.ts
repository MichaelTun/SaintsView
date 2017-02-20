import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AngularFire, FirebaseListObservable, AngularFireDatabase } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Property } from '../shared/property';

@Injectable()
export class FirebaseService {
  properties: FirebaseListObservable<Property[]>;

  constructor(private _af: AngularFire, private db: AngularFireDatabase) {

  }

  getProperties() {
      this.properties = this._af.database.list('/properties') as
        FirebaseListObservable<Property[]>;
    return this.properties;
  }

  addProperty(newProperty){
    return this.properties.push(newProperty);
  }

    getProperty(propertytIndex: string) {
        return this.db.object('/properties/' + propertytIndex);
    }

    updateProperty(key, updProperty) {
    return this.properties.update(key, updProperty);
  }

  deleteProperty(key) {
    return this.properties.remove(key);
  }
}


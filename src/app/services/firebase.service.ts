import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AngularFire, FirebaseListObservable, AngularFireDatabase } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Property } from '../shared/property';
import { Enquiry } from '../shared/enquiry';

@Injectable()
export class FirebaseService {
  properties: FirebaseListObservable<Property[]>;
  enquiries: FirebaseListObservable<Enquiry[]>;

  constructor(private _af: AngularFire, private db: AngularFireDatabase) {

  }

  getProperties() {
    this.properties = this._af.database.list('/properties') as
      FirebaseListObservable<Property[]>;
    return this.properties;
  }

  addProperty(newProperty) {
    return this.properties.push(newProperty);
  }

  getProperty(propertytIndex: string) {
    return this.db.object('/properties/' + propertytIndex);
  }

  updateProperty(key, updProperty) {
    return this.properties.update(key, updProperty);
  }

  updatePropertyByWeek(key, weekNum, updWeek) {
    let arrayIndex = weekNum - 1;
    // let propertiesData = this._af.database.list('/properties/' + key + '/weeks/' + arrayIndex);
    // propertiesData.forEach(element => {
    //   console.log(element);
    // });
    return this.db.object('/properties/' + key + '/weeks/' + arrayIndex).update(updWeek);
    // console.log('key :' + key);
    // console.log('week :' + weekNum);
    // console.log(updWeek);

    // console.log(propertiesData);
  }

  updatePropertyDetails(key, propDetails) {
    // let propertiesData = this._af.database.list('/properties/' + key + '/weeks/' + arrayIndex);
    // propertiesData.forEach(element => {
    //   console.log(element);
    // });
    return this.db.object('/properties/' + key).update(propDetails);
    // console.log('key :' + key);
    // console.log('week :' + weekNum);
    // console.log(updWeek);

    // console.log(propertiesData);
  }

  deleteProperty(key) {
    return this.properties.remove(key);
  }

  getEnquiries() {
    this.enquiries = this._af.database.list('/enquiries') as
      FirebaseListObservable<Enquiry[]>;
    return this.enquiries;
  }

  addEnquiry(newEnquiry) {
    return this.enquiries.push(newEnquiry);
  }
}


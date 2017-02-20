import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Property } from '../shared/property';

@Injectable()
export class PropertyService {

    constructor(private http: Http) {
        console.log('Property service started');
    }
    getAllProperties() {
        return this.http.get('/api/properties')
            .map(res => res.json());
    }

    getPropertyByID(id) {
        console.log('getProperty');
        return this.http.get('/api/properties/' + id)
            .map(res => res.json());
    }

    getAvailability() {
        return this.http.get('/api/availability')
            .map(res => res.json());
    }

    addProperty(newProperty) {
        let headers = new Headers();
        console.log("addProperty");
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/properties', newProperty, { headers: headers })
            .map(res => res.json());
    }

    updateProperty(property) {
        let headers = new Headers();
        console.log(property.id);
        console.log(property);
        console.log('update property fired: ' + property);
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/properties/' + property.id, JSON.stringify(property), { headers: headers })
            .map(res => res.json());
    }

        updateAvailability(property) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/properties/' + property.id + '/' + property.week, JSON.stringify(property), { headers: headers })
            .map(res => res.json());
    }

    // put("/api/contacts/:id")
    // updateContact(putProperty: Property): Promise<Property> {
    //   let putUrl = '/api/properties' + '/' + putProperty._id;
    //   return this.http.put(putUrl, putProperty)
    //              .toPromise()
    //              .then(response => response.json() as Property)
    //              .catch(this.handleError);
    // }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }

}

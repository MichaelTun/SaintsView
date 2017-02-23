import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../../services/firebase.service';

@Component({
    selector: 'weekValuesAddComponent',
    templateUrl: 'weekValuesAdd.component.html'
})
export class WeekValuesAddComponent implements OnInit {
    constructor( private _firebaseService: FirebaseService) { }

        appState: string;
        activeKey: string;

    ngOnInit() { }

        changeState(state, key) {
        console.log('changing state to ' + state);
        if (key) {
            this.activeKey = key;
        }
        this.appState = state;
    }

    addProperty(
        propertyName: String,
        propertySize: String,
        extraInfo: String,
        season1: String, module1: String, price1: Number, season2: String, module2: String, price2: Number,
        season3: String, module3: String, price3: Number, season4: String, module4: String, price4: Number,
        season5: String, module5: String, price5: Number, season6: String, module6: String, price6: Number,
        season7: String, module7: String, price7: Number, season8: String, module8: String, price8: Number,
        season9: String, module9: String, price9: Number, season10: String, module10: String, price10: Number,
        season11: String, module11: String, price11: Number, season12: String, module12: String, price12: Number,
        season13: String, module13: String, price13: Number, season14: String, module14: String, price14: Number,
        season15: String, module15: String, price15: Number, season16: String, module16: String, price16: Number,
        season17: String, module17: String, price17: Number, season18: String, module18: String, price18: Number,
        season19: String, module19: String, price19: Number, season20: String, module20: String, price20: Number,
        season21: String, module21: String, price21: Number, season22: String, module22: String, price22: Number,
        season23: String, module23: String, price23: Number, season24: String, module24: String, price24: Number,
        season25: String, module25: String, price25: Number, season26: String, module26: String, price26: Number,
        season27: String, module27: String, price27: Number, season28: String, module28: String, price28: Number,
        season29: String, module29: String, price29: Number, season30: String, module30: String, price30: Number,
        season31: String, module31: String, price31: Number, season32: String, module32: String, price32: Number,
        season33: String, module33: String, price33: Number, season34: String, module34: String, price34: Number,
        season35: String, module35: String, price35: Number, season36: String, module36: String, price36: Number,
        season37: String, module37: String, price37: Number, season38: String, module38: String, price38: Number,
        season39: String, module39: String, price39: Number, season40: String, module40: String, price40: Number,
        season41: String, module41: String, price41: Number, season42: String, module42: String, price42: Number,
        season43: String, module43: String, price43: Number, season44: String, module44: String, price44: Number,
        season45: String, module45: String, price45: Number, season46: String, module46: String, price46: Number,
        season47: String, module47: String, price47: Number, season48: String, module48: String, price48: Number,
        season49: String, module49: String, price49: Number, season50: String, module50: String, price50: Number,
        season51: String, module51: String, price51: Number, season52: String, module52: String, price52: Number

    ) {
        let createdAt = new Date().toString();

        let newProperty = {
            property_name: propertyName,
            property_size: propertySize,
            extra_info: extraInfo,
            weeks: [
                {// week1
                    week: 1,
                    season: season1,
                    module: module1,
                    arrival_date: '13/01/2017',
                    departure_date: '20/01/2017',
                    price: price1,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week2
                    week: 2,
                    season: season2,
                    module: module2,
                    arrival_date: '20/01/2017',
                    departure_date: '27/01/2017',
                    price: price2,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week3
                    week: 3,
                    season: season3,
                    module: module3,
                    arrival_date: '27/01/2017',
                    departure_date: '03/02/2017',
                    price: price3,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week4
                    week: 4,
                    season: season4,
                    module: module4,
                    arrival_date: '03/02/2017',
                    departure_date: '10/02/2017',
                    price: price4,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week5
                    week: 5,
                    season: season5,
                    module: module5,
                    arrival_date: '10/02/2017',
                    departure_date: '17/02/2017',
                    price: price5,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week6
                    week: 6,
                    season: season6,
                    module: module6,
                    arrival_date: '17/02/2017',
                    departure_date: '24/02/2017',
                    price: price6,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week7
                    week: 7,
                    season: season7,
                    module: module7,
                    arrival_date: '24/02/2017',
                    departure_date: '03/03/2017',
                    price: price7,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week8
                    week: 8,
                    season: season8,
                    module: module8,
                    arrival_date: '03/03/2017',
                    departure_date: '10/03/2017',
                    price: price8,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week9
                    week: 9,
                    season: season9,
                    module: module9,
                    arrival_date: '10/03/2017',
                    departure_date: '17/03/2017',
                    price: price9,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week10
                    week: 10,
                    season: season10,
                    module: module10,
                    arrival_date: '17/03/2017',
                    departure_date: '24/03/2017',
                    price: price10,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week11
                    week: 11,
                    season: season11,
                    module: module11,
                    arrival_date: '24/03/2017',
                    departure_date: '31/03/2017',
                    price: price11,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week12
                    week: 12,
                    season: season12,
                    module: module12,
                    arrival_date: '31/03/2017',
                    departure_date: '07/04/2017',
                    price: price12,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week13
                    week: 13,
                    season: season13,
                    module: module13,
                    arrival_date: '07/04/2017',
                    departure_date: '14/04/2017',
                    price: price13,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week14
                    week: 14,
                    season: season14,
                    module: module14,
                    arrival_date: '14/04/2017',
                    departure_date: '21/04/2017',
                    price: price14,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week15
                    week: 15,
                    season: season15,
                    module: module15,
                    arrival_date: '21/04/2017',
                    departure_date: '28/04/2017',
                    price: price15,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week16
                    week: 16,
                    season: season16,
                    module: module16,
                    arrival_date: '28/04/2017',
                    departure_date: '05/05/2017',
                    price: price16,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week17
                    week: 17,
                    season: season17,
                    module: module17,
                    arrival_date: '05/05/2017',
                    departure_date: '12/05/2017',
                    price: price17,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week18
                    week: 18,
                    season: season18,
                    module: module18,
                    arrival_date: '12/05/2017',
                    departure_date: '19/05/2017',
                    price: price18,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week19
                    week: 19,
                    season: season19,
                    module: module19,
                    arrival_date: '19/05/2017',
                    departure_date: '26/05/2017',
                    price: price19,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week20
                    week: 20,
                    season: season20,
                    module: module20,
                    arrival_date: '26/05/2017',
                    departure_date: '02/06/2017',
                    price: price20,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week21
                    week: 21,
                    season: season21,
                    module: module21,
                    arrival_date: '02/06/2017',
                    departure_date: '09/06/2017',
                    price: price21,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week22
                    week: 22,
                    season: season22,
                    module: module22,
                    arrival_date: '09/06/2017',
                    departure_date: '16/06/2017',
                    price: price22,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week23
                    week: 23,
                    season: season23,
                    module: module23,
                    arrival_date: '16/06/2017',
                    departure_date: '23/06/2017',
                    price: price23,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week24
                    week: 24,
                    season: season24,
                    module: module24,
                    arrival_date: '23/06/2017',
                    departure_date: '30/06/2017',
                    price: price24,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week25
                    week: 25,
                    season: season25,
                    module: module25,
                    arrival_date: '30/06/2017',
                    departure_date: '07/07/2017',
                    price: price25,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week26
                    week: 26,
                    season: season26,
                    module: module26,
                    arrival_date: '07/07/2017',
                    departure_date: '14/07/2017',
                    price: price26,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week27
                    week: 27,
                    season: season27,
                    module: module27,
                    arrival_date: '14/07/2017',
                    departure_date: '21/07/2017',
                    price: price27,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week28
                    week: 28,
                    season: season28,
                    module: module28,
                    arrival_date: '21/07/2017',
                    departure_date: '28/07/2017',
                    price: price28,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week29
                    week: 29,
                    season: season29,
                    module: module29,
                    arrival_date: '28/07/2017',
                    departure_date: '04/08/2017',
                    price: price29,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week30
                    week: 30,
                    season: season30,
                    module: module30,
                    arrival_date: '04/08/2017',
                    departure_date: '11/08/2017',
                    price: price30,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week31
                    week: 31,
                    season: season31,
                    module: module31,
                    arrival_date: '11/08/2017',
                    departure_date: '18/08/2017',
                    price: price31,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week32
                    week: 32,
                    season: season32,
                    module: module32,
                    arrival_date: '18/08/2017',
                    departure_date: '28/08/2017',
                    price: price32,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week33
                    week: 33,
                    season: season33,
                    module: module33,
                    arrival_date: '28/08/2017',
                    departure_date: '01/09/2017',
                    price: price33,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week34
                    week: 34,
                    season: season34,
                    module: module34,
                    arrival_date: '01/09/2017',
                    departure_date: '08/09/2017',
                    price: price34,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week35
                    week: 35,
                    season: season35,
                    module: module35,
                    arrival_date: '08/09/2017',
                    departure_date: '15/09/2017',
                    price: price35,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week36
                    week: 36,
                    season: season36,
                    module: module36,
                    arrival_date: '15/09/2017',
                    departure_date: '22/09/2017',
                    price: price36,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week37
                    week: 37,
                    season: season37,
                    module: module37,
                    arrival_date: '22/09/2017',
                    departure_date: '29/09/2017',
                    price: price37,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week38
                    week: 38,
                    season: season38,
                    module: module38,
                    arrival_date: '29/09/2017',
                    departure_date: '06/10/2017',
                    price: price38,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week39
                    week: 39,
                    season: season39,
                    module: module39,
                    arrival_date: '06/10/2017',
                    departure_date: '13/10/2017',
                    price: price39,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week40
                    week: 40,
                    season: season40,
                    module: module40,
                    arrival_date: '13/10/2017',
                    departure_date: '20/10/2017',
                    price: price40,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week41
                    week: 41,
                    season: season41,
                    module: module41,
                    arrival_date: '20/10/2017',
                    departure_date: '27/10/2017',
                    price: price41,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week42
                    week: 42,
                    season: season42,
                    module: module42,
                    arrival_date: '27/10/2017',
                    departure_date: '03/11/2017',
                    price: price42,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week43
                    week: 43,
                    season: season43,
                    module: module43,
                    arrival_date: '03/11/2017',
                    departure_date: '10/11/2017',
                    price: price43,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week44
                    week: 44,
                    season: season44,
                    module: module44,
                    arrival_date: '10/11/2017',
                    departure_date: '17/11/2017',
                    price: price44,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week45
                    week: 45,
                    season: season45,
                    module: module45,
                    arrival_date: '17/11/2017',
                    departure_date: '24/11/2017',
                    price: price45,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week46
                    week: 46,
                    season: season46,
                    module: module46,
                    arrival_date: '24/11/2017',
                    departure_date: '01/12/2017',
                    price: price46,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week47
                    week: 47,
                    season: season47,
                    module: module47,
                    arrival_date: '01/12/2017',
                    departure_date: '08/12/2017',
                    price: price47,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week48
                    week: 48,
                    season: season48,
                    module: module48,
                    arrival_date: '08/12/2017',
                    departure_date: '15/12/2017',
                    price: price48,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week49
                    week: 49,
                    season: season49,
                    module: module49,
                    arrival_date: '15/12/2017',
                    departure_date: '22/12/2017',
                    price: price49,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week50
                    week: 50,
                    season: season50,
                    module: module50,
                    arrival_date: '22/12/2017',
                    departure_date: '29/12/2017',
                    price: price50,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week51
                    week: 51,
                    season: season51,
                    module: module51,
                    arrival_date: '29/12/2017',
                    departure_date: '05/01/2018',
                    price: price51,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }, { // week52
                    week: 52,
                    season: season52,
                    module: module52,
                    arrival_date: '05/01/2018',
                    departure_date: '12/01/2018',
                    price: price52,
                    availability: 'Available',
                    owner_name: '',
                    owner_last_name: '',
                    phone_number: 0,
                    email: '',
                    sold_price: 0
                }
            ]
        };

        console.log(newProperty);
        this._firebaseService.addProperty(newProperty);
        this.changeState('default', '');
    }
}
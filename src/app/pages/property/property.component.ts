import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { FirebaseService } from '../../services/firebase.service';

import { Property } from '../../shared/property';

@Component({
    selector: 'propertyComponent',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./property.scss')],
    template: require('./property.component.html')
})
export class PropertyComponent implements OnInit {

    constructor(private _firebaseService: FirebaseService) {

    }

    appState: string;
    weekState: string;
    activeKey: string;
    properties: Property[];
    showWeekValues: String;
    activePropertyName: String;
    activePropertySize: String;
    activeAvailability: String;
    activeExtraInfo: String;

    // Variables for edit

    // Active Season 
    activeSeason1: String; activeSeason2: String; activeSeason3: String; activeSeason4: String; activeSeason5: String;
    activeSeason6: String; activeSeason7: String; activeSeason8: String; activeSeason9: String; activeSeason10: String;
    activeSeason11: String; activeSeason12: String; activeSeason13: String; activeSeason14: String;
    activeSeason15: String; activeSeason16: String; activeSeason17: String; activeSeason18: String;
    activeSeason19: String; activeSeason20: String; activeSeason21: String; activeSeason22: String;
    activeSeason23: String; activeSeason24: String; activeSeason25: String; activeSeason26: String;
    activeSeason27: String; activeSeason28: String; activeSeason29: String; activeSeason30: String;
    activeSeason31: String; activeSeason32: String; activeSeason33: String; activeSeason34: String;
    activeSeason35: String; activeSeason36: String; activeSeason37: String; activeSeason38: String;
    activeSeason39: String; activeSeason40: String; activeSeason41: String; activeSeason42: String;
    activeSeason43: String; activeSeason44: String; activeSeason45: String; activeSeason46: String;
    activeSeason47: String; activeSeason48;
    activeSeason49: String; activeSeason50: String; activeSeason51: String; activeSeason52: String;
    // Active module
    activeModule1: String; activeModule2: String; activeModule3: String; activeModule4: String; activeModule5: String;
    activeModule6: String; activeModule7: String; activeModule8: String; activeModule9: String; activeModule10: String;
    activeModule11: String; activeModule12: String; activeModule13: String; activeModule14: String;
    activeModule15: String; activeModule16: String; activeModule17: String; activeModule18: String;
    activeModule19: String; activeModule20: String; activeModule21: String; activeModule22: String;
    activeModule23: String; activeModule24: String; activeModule25: String; activeModule26: String;
    activeModule27: String; activeModule28: String; activeModule29: String; activeModule30: String;
    activeModule31: String; activeModule32: String; activeModule33: String; activeModule34: String;
    activeModule35: String; activeModule36: String; activeModule37: String; activeModule38: String;
    activeModule39: String; activeModule40: String; activeModule41: String; activeModule42: String;
    activeModule43: String; activeModule44: String; activeModule45: String; activeModule46: String;
    activeModule47: String; activeModule48: String; activeModule49: String; activeModule50: String;
    activeModule51: String; activeModule52: String;
    // Active Price
    activePrice1: Number; activePrice2: Number;  activePrice3: Number; activePrice4: Number;
    activePrice5: Number; activePrice6: Number; activePrice7: Number; activePrice8: Number;
    activePrice9: Number; activePrice10: Number; activePrice11: Number;  activePrice12: Number;
    activePrice13: Number; activePrice14: Number; activePrice15: Number; activePrice16: Number;
    activePrice17: Number; activePrice18: Number; activePrice19: Number; activePrice20: Number;
    activePrice21: Number; activePrice22: Number; activePrice23: Number; activePrice24: Number;
    activePrice25: Number; activePrice26: Number; activePrice27: Number; activePrice28: Number;
    activePrice29: Number;  activePrice30: Number; activePrice31: Number; activePrice32: Number;
    activePrice33: Number; activePrice34: Number; activePrice35: Number; activePrice36: Number;
    activePrice37: Number; activePrice38: Number; activePrice39: Number; activePrice40: Number;
    activePrice41: Number; activePrice42: Number; activePrice43: Number; activePrice44: Number;
    activePrice45: Number; activePrice46: Number; activePrice47: Number; activePrice48: Number;
    activePrice49: Number; activePrice50: Number; activePrice51: Number; activePrice52: Number;
    // Edit values: Availability
    activeAvail1: String; activeAvail2: String; activeAvail3: String; activeAvail4: String; activeAvail5: String;
    activeAvail6: String; activeAvail7: String; activeAvail8: String; activeAvail9: String; activeAvail10: String;
    activeAvail11: String; activeAvail12: String; activeAvail13: String; activeAvail14: String; activeAvail15: String;
    activeAvail16: String; activeAvail17: String; activeAvail18: String; activeAvail19: String; activeAvail20: String;
    activeAvail21: String; activeAvail22: String; activeAvail23: String; activeAvail24: String; activeAvail25: String;
    activeAvail26: String; activeAvail27: String; activeAvail28: String; activeAvail29: String; activeAvail30: String;
    activeAvail31: String; activeAvail32: String; activeAvail33: String; activeAvail34: String; activeAvail35: String;
    activeAvail36: String; activeAvail37: String; activeAvail38: String; activeAvail39: String; activeAvail40: String;
    activeAvail41: String; activeAvail42: String; activeAvail43: String; activeAvail44: String; activeAvail45: String;
    activeAvail46: String; activeAvail47: String; activeAvail48: String; activeAvail49: String; activeAvail50: String;
    activeAvail51: String; activeAvail52: String;
    // Edit values: First Name
    activeFirstName1: String; activeFirstName2: String; activeFirstName3: String; activeFirstName4: String;
    activeFirstName5: String; activeFirstName6: String; activeFirstName7: String; activeFirstName8: String;
    activeFirstName9: String; activeFirstName10: String; activeFirstName11: String; activeFirstName12: String;
    activeFirstName13: String; activeFirstName14: String; activeFirstName15: String; activeFirstName16: String;
    activeFirstName17: String; activeFirstName18: String; activeFirstName19: String; activeFirstName20: String;
    activeFirstName21: String; activeFirstName22: String; activeFirstName23: String; activeFirstName24: String;
    activeFirstName25: String; activeFirstName26: String; activeFirstName27: String; activeFirstName28: String;
    activeFirstName29: String; activeFirstName30: String; activeFirstName31: String; activeFirstName32: String;
    activeFirstName33: String; activeFirstName34: String; activeFirstName35: String; activeFirstName36: String;
    activeFirstName37: String; activeFirstName38: String; activeFirstName39: String; activeFirstName40: String;
    activeFirstName41: String; activeFirstName42: String; activeFirstName43: String; activeFirstName44: String;
    activeFirstName45: String; activeFirstName46: String; activeFirstName47: String; activeFirstName48: String;
    activeFirstName49: String; activeFirstName50: String; activeFirstName51: String; activeFirstName52: String;
    // Edit values: Last Name
    activeLastName1: String; activeLastName2: String; activeLastName3: String; activeLastName4: String;
    activeLastName5: String; activeLastName6: String; activeLastName7: String; activeLastName8: String;
    activeLastName9: String; activeLastName10: String; activeLastName11: String; activeLastName12: String;
    activeLastName13: String; activeLastName14: String; activeLastName15: String; activeLastName16: String;
    activeLastName17: String; activeLastName18: String; activeLastName19: String; activeLastName20: String;
    activeLastName21: String; activeLastName22: String; activeLastName23: String; activeLastName24: String;
    activeLastName25: String; activeLastName26: String; activeLastName27: String; activeLastName28: String;
    activeLastName29: String; activeLastName30: String; activeLastName31: String; activeLastName32: String;
    activeLastName33: String; activeLastName34: String; activeLastName35: String; activeLastName36: String;
    activeLastName37: String; activeLastName38: String; activeLastName39: String; activeLastName40: String;
    activeLastName41: String; activeLastName42: String; activeLastName43: String; activeLastName44: String;
    activeLastName45: String; activeLastName46: String; activeLastName47: String; activeLastName48: String;
    activeLastName49: String; activeLastName50: String; activeLastName51: String; activeLastName52: String;
    // Edit Values: Phone Number
    activePhoneNumber1: String; activePhoneNumber2: String; activePhoneNumber3: String; activePhoneNumber4: String;
    activePhoneNumber5: String; activePhoneNumber6: String; activePhoneNumber7: String; activePhoneNumber8: String;
    activePhoneNumber9: String; activePhoneNumber10: String; activePhoneNumber11: String; activePhoneNumber12: String;
    activePhoneNumber13: String; activePhoneNumber14: String; activePhoneNumber15: String; activePhoneNumber16: String;
    activePhoneNumber17: String; activePhoneNumber18: String; activePhoneNumber19: String; activePhoneNumber20: String;
    activePhoneNumber21: String; activePhoneNumber22: String; activePhoneNumber23: String; activePhoneNumber24: String;
    activePhoneNumber25: String; activePhoneNumber26: String; activePhoneNumber27: String; activePhoneNumber28: String;
    activePhoneNumber29: String; activePhoneNumber30: String; activePhoneNumber31: String; activePhoneNumber32: String;
    activePhoneNumber33: String; activePhoneNumber34: String; activePhoneNumber35: String; activePhoneNumber36: String;
    activePhoneNumber37: String; activePhoneNumber38: String; activePhoneNumber39: String; activePhoneNumber40: String;
    activePhoneNumber41: String; activePhoneNumber42: String; activePhoneNumber43: String; activePhoneNumber44: String;
    activePhoneNumber45: String; activePhoneNumber46: String; activePhoneNumber47: String; activePhoneNumber48: String;
    activePhoneNumber49: String; activePhoneNumber50: String; activePhoneNumber51: String; activePhoneNumber52: String;
    // Edit Values: Email
    activeEmail1: String; activeEmail2: String; activeEmail3: String; activeEmail4: String; activeEmail5: String;
    activeEmail6: String; activeEmail7: String; activeEmail8: String; activeEmail9: String; activeEmail10: String;
    activeEmail11: String; activeEmail12: String; activeEmail13: String; activeEmail14: String; activeEmail15: String;
    activeEmail16: String; activeEmail17: String; activeEmail18: String; activeEmail19: String; activeEmail20: String;
    activeEmail21: String; activeEmail22: String; activeEmail23: String; activeEmail24: String; activeEmail25: String;
    activeEmail26: String; activeEmail27: String; activeEmail28: String; activeEmail29: String; activeEmail30: String;
    activeEmail31: String; activeEmail32: String; activeEmail33: String; activeEmail34: String; activeEmail35: String;
    activeEmail36: String; activeEmail37: String; activeEmail38: String; activeEmail39: String; activeEmail40: String;
    activeEmail41: String; activeEmail42: String; activeEmail43: String; activeEmail44: String; activeEmail45: String;
    activeEmail46: String; activeEmail47: String; activeEmail48: String; activeEmail49: String; activeEmail50: String;
    activeEmail51: String; activeEmail52: String;
    // Edit Values: Sold Price
    activeSoldPrice1: Number; activeSoldPrice2: Number; activeSoldPrice3: Number; activeSoldPrice4: Number;
    activeSoldPrice5: Number; activeSoldPrice6: Number; activeSoldPrice7: Number; activeSoldPrice8: Number;
    activeSoldPrice9: Number; activeSoldPrice10: Number; activeSoldPrice11: Number; activeSoldPrice12: Number;
    activeSoldPrice13: Number; activeSoldPrice14: Number; activeSoldPrice15: Number; activeSoldPrice16: Number;
    activeSoldPrice17: Number; activeSoldPrice18: Number; activeSoldPrice19: Number; activeSoldPrice20: Number;
    activeSoldPrice21: Number; activeSoldPrice22: Number; activeSoldPrice23: Number; activeSoldPrice24: Number;
    activeSoldPrice25: Number; activeSoldPrice26: Number; activeSoldPrice27: Number; activeSoldPrice28: Number;
    activeSoldPrice29: Number; activeSoldPrice30: Number; activeSoldPrice31: Number; activeSoldPrice32: Number;
    activeSoldPrice33: Number; activeSoldPrice34: Number; activeSoldPrice35: Number; activeSoldPrice36: Number;
    activeSoldPrice37: Number; activeSoldPrice38: Number; activeSoldPrice39: Number; activeSoldPrice40: Number;
    activeSoldPrice41: Number; activeSoldPrice42: Number; activeSoldPrice43: Number; activeSoldPrice44: Number;
    activeSoldPrice45: Number; activeSoldPrice46: Number; activeSoldPrice47: Number; activeSoldPrice48: Number;
    activeSoldPrice49: Number; activeSoldPrice50: Number; activeSoldPrice51: Number; activeSoldPrice52: Number;

    // Edit Values: Payment Type
    activePaymentT1: string; activePaymentT2: string; activePaymentT3: string; activePaymentT4: string;
    activePaymentT5: string; activePaymentT6: string; activePaymentT7: string; activePaymentT8: string;
    activePaymentT9: string; activePaymentT10: string; activePaymentT11: string; activePaymentT12: string;
    activePaymentT13: string; activePaymentT14: string; activePaymentT15: string; activePaymentT16: string;
    activePaymentT17: string; activePaymentT18: string; activePaymentT19: string; activePaymentT20: string;
    activePaymentT21: string; activePaymentT22: string; activePaymentT23: string; activePaymentT24: string;
    activePaymentT25: string; activePaymentT26: string; activePaymentT27: string; activePaymentT28: string;
    activePaymentT29: string; activePaymentT30: string; activePaymentT31: string; activePaymentT32: string;
    activePaymentT33: string; activePaymentT34: string; activePaymentT35: string; activePaymentT36: string;
    activePaymentT37: string; activePaymentT38: string; activePaymentT39: string; activePaymentT40: string;
    activePaymentT41: string; activePaymentT42: string; activePaymentT43: string; activePaymentT44: string;
    activePaymentT45: string; activePaymentT46: string; activePaymentT47: string; activePaymentT48: string;
    activePaymentT49: string; activePaymentT50: string; activePaymentT51: string; activePaymentT52: string;

    // Edit Values: Terms
    activeTerms1: string; activeTerms2: string; activeTerms3: string; activeTerms4: string;
    activeTerms5: string; activeTerms6: string; activeTerms7: string; activeTerms8: string;
    activeTerms9: string; activeTerms10: string; activeTerms11: string; activeTerms12: string; activeTerms13: string;
    activeTerms14: string; activeTerms15: string; activeTerms16: string; activeTerms17: string; activeTerms18: string;
    activeTerms19: string; activeTerms20: string; activeTerms21: string; activeTerms22: string; activeTerms23: string;
    activeTerms24: string; activeTerms25: string; activeTerms26: string; activeTerms27: string; activeTerms28: string;
    activeTerms29: string; activeTerms30: string; activeTerms31: string; activeTerms32: string; activeTerms33: string;
    activeTerms34: string; activeTerms35: string; activeTerms36: string; activeTerms37: string; activeTerms38: string;
    activeTerms39: string; activeTerms40: string; activeTerms41: string; activeTerms42: string; activeTerms43: string;
    activeTerms44: string; activeTerms45: string; activeTerms46: string; activeTerms47: string; activeTerms48: string;
    activeTerms49: string; activeTerms50: string; activeTerms51: string; activeTerms52: string;

        ngOnInit() {
        // firebase
        this._firebaseService.getProperties().subscribe(properties => {
            this.properties = properties;
        });
    }

    changeState(state, key) {
        console.log('changing state to ' + state);
        if (key) {
            this.activeKey = key;
        }
        this.appState = state;
    }

    changeWeekState(week) {
        console.log('changing week state to ' + week);
        this.weekState = week;
    }

    showWeeks(show) {
        if (show === 'true')
            this.showWeekValues = 'true';
    }

    showEdit(property) {
        this.changeState('edit', property.$key);
        this.activePropertyName = property.property_name;
        this.activePropertySize = property.property_size;
        this.activeExtraInfo = property.extra_info;
        // Week 1
        this.activeSeason1 = property.weeks[0].season; this.activeModule1 = property.weeks[0].module;
        this.activePrice1 = property.weeks[0].price; this.activeAvail1 = property.weeks[0].availability;
        this.activeFirstName1 = property.weeks[0].owner_name; this.activeLastName1 = property.weeks[0].owner_last_name;
        this.activeEmail1 = property.weeks[0].email; this.activeSoldPrice1 = property.weeks[0].sold_price;
        this.activePhoneNumber1 = property.weeks[0].phone_number;
        this.activePaymentT1 = property.weeks[0].payment_type;
        // this.activeTerms1 = property.weeks[0].terms;
        // Week 2
        this.activeSeason2 = property.weeks[1].season; this.activeModule2 = property.weeks[1].module;
        this.activePrice2 = property.weeks[1].price; this.activeAvail2 = property.weeks[1].availability;
        this.activeFirstName2 = property.weeks[1].owner_name; this.activeLastName2 = property.weeks[1].owner_last_name;
        this.activeEmail2 = property.weeks[1].email; this.activeSoldPrice2 = property.weeks[1].sold_price;
        this.activePhoneNumber2 = property.weeks[1].phone_number;
        this.activePaymentT2 = property.weeks[1].payment_type;
        // this.activeTerms2 = property.weeks[1].terms;
        // Week 3
        this.activeSeason3 = property.weeks[2].season; this.activeModule3 = property.weeks[2].module;
        this.activePrice3 = property.weeks[2].price; this.activeAvail3 = property.weeks[2].availability;
        this.activeFirstName3 = property.weeks[2].owner_name; this.activeLastName3 = property.weeks[2].owner_last_name;
        this.activeEmail3 = property.weeks[2].email; this.activeSoldPrice3 = property.weeks[2].sold_price;
        this.activePhoneNumber3 = property.weeks[2].phone_number;
        this.activePaymentT3 = property.weeks[2].payment_type;
        // this.activeTerms3 = property.weeks[2].terms;
        // Week 4
        this.activeSeason4 = property.weeks[3].season; this.activeModule4 = property.weeks[3].module;
        this.activePrice4 = property.weeks[3].price; this.activeAvail4 = property.weeks[3].availability;
        this.activeFirstName4 = property.weeks[3].owner_name; this.activeLastName4 = property.weeks[3].owner_last_name;
        this.activeEmail4 = property.weeks[3].email; this.activeSoldPrice4 = property.weeks[3].sold_price;
        this.activePhoneNumber4 = property.weeks[3].phone_number;
        this.activePaymentT4 = property.weeks[3].payment_type;
        // this.activeTerms3 = property.weeks[3].terms;

        this.activeSeason5 = property.weeks[4].season; this.activeModule5 = property.weeks[4].module;
        this.activePrice5 = property.weeks[4].price; this.activeAvail5 = property.weeks[4].availability;
        this.activeFirstName5 = property.weeks[4].owner_name; this.activeLastName5 = property.weeks[4].owner_last_name;
        this.activeEmail5 = property.weeks[4].email; this.activeSoldPrice5 = property.weeks[4].sold_price;
        this.activePhoneNumber5 = property.weeks[4].phone_number;
        this.activePaymentT5 = property.weeks[4].payment_type;
        // this.activeTerms5 = property.weeks[4].terms;

        this.activeSeason6 = property.weeks[5].season; this.activeModule6 = property.weeks[5].module;
        this.activePrice6 = property.weeks[5].price; this.activeAvail6 = property.weeks[5].availability;
        this.activeFirstName6 = property.weeks[5].owner_name; this.activeLastName6 = property.weeks[5].owner_last_name;
        this.activeEmail6 = property.weeks[5].email; this.activeSoldPrice6 = property.weeks[5].sold_price;
        this.activePhoneNumber6 = property.weeks[5].phone_number;
        this.activePaymentT6 = property.weeks[5].payment_type;
        // this.activeTerms6 = property.weeks[5].terms;

        this.activeSeason7 = property.weeks[6].season; this.activeModule7 = property.weeks[6].module;
        this.activePrice7 = property.weeks[6].price; this.activeAvail7 = property.weeks[6].availability;
        this.activeFirstName7 = property.weeks[6].owner_name; this.activeLastName7 = property.weeks[6].owner_last_name;
        this.activeEmail7 = property.weeks[6].email; this.activeSoldPrice7 = property.weeks[6].sold_price;
        this.activePhoneNumber7 = property.weeks[6].phone_number;
        this.activePaymentT7 = property.weeks[6].payment_type;
        // this.activeTerms7 = property.weeks[6].terms;

        this.activeSeason8 = property.weeks[7].season; this.activeModule8 = property.weeks[7].module;
        this.activePrice8 = property.weeks[7].price; this.activeAvail8 = property.weeks[7].availability;
        this.activeFirstName8 = property.weeks[7].owner_name; this.activeLastName8 = property.weeks[7].owner_last_name;
        this.activeEmail8 = property.weeks[7].email; this.activeSoldPrice8 = property.weeks[7].sold_price;
        this.activePhoneNumber8 = property.weeks[7].phone_number;
        this.activePaymentT8 = property.weeks[7].payment_type;
        // this.activeTerms8 = property.weeks[7].terms;

        this.activeSeason9 = property.weeks[8].season; this.activeModule9 = property.weeks[8].module;
        this.activePrice9 = property.weeks[8].price; this.activeAvail9 = property.weeks[8].availability;
        this.activeFirstName9 = property.weeks[8].owner_name; this.activeLastName9 = property.weeks[8].owner_last_name;
        this.activeEmail9 = property.weeks[8].email; this.activeSoldPrice9 = property.weeks[8].sold_price;
        this.activePhoneNumber9 = property.weeks[8].phone_number;
        this.activePaymentT9 = property.weeks[8].payment_type;
        //  this.activeTerms9 = property.weeks[8].terms;

        this.activeSeason10 = property.weeks[9].season; this.activeModule10 = property.weeks[9].module;
        this.activePrice10 = property.weeks[9].price; this.activeAvail10 = property.weeks[9].availability;
        this.activeFirstName10 = property.weeks[9].owner_name;this.activeLastName10 = property.weeks[9].owner_last_name;
        this.activeEmail10 = property.weeks[9].email; this.activeSoldPrice10 = property.weeks[9].sold_price;
        this.activePhoneNumber10 = property.weeks[9].phone_number;
        this.activePaymentT10 = property.weeks[9].payment_type;
        // this.activeTerms10 = property.weeks[9].terms;

        this.activeSeason11 = property.weeks[10].season; this.activeModule11 = property.weeks[10].module;
        this.activePrice11 = property.weeks[10].price; this.activeAvail11 = property.weeks[10].availability;
        this.activeFirstName11=property.weeks[10].owner_name;this.activeLastName11 = property.weeks[10].owner_last_name;
        this.activeEmail11 = property.weeks[10].email; this.activeSoldPrice11 = property.weeks[10].sold_price;
        this.activePhoneNumber11 = property.weeks[10].phone_number;
        this.activePaymentT11 = property.weeks[10].payment_type;
        // this.activeTerms11 = property.weeks[10].terms;

        this.activeSeason12 = property.weeks[11].season; this.activeModule12 = property.weeks[11].module;
        this.activePrice12 = property.weeks[11].price; this.activeAvail12 = property.weeks[11].availability;
        this.activeFirstName12 = property.weeks[1].owner_name;
        this.activeLastName12 = property.weeks[11].owner_last_name;
        this.activeEmail12 = property.weeks[11].email; this.activeSoldPrice12 = property.weeks[11].sold_price;
        this.activePhoneNumber12 = property.weeks[11].phone_number;
        this.activePaymentT12 = property.weeks[11].payment_type; 
        // this.activeTerms12 = property.weeks[11].terms;

        this.activeSeason13 = property.weeks[12].season; this.activeModule13 = property.weeks[12].module;
        this.activePrice13 = property.weeks[12].price; this.activeAvail13 = property.weeks[12].availability;
        this.activeFirstName13 = property.weeks[12].owner_name;
        this.activeLastName13 = property.weeks[12].owner_last_name;
        this.activeEmail13 = property.weeks[12].email; this.activeSoldPrice13 = property.weeks[12].sold_price;
        this.activePhoneNumber13 = property.weeks[12].phone_number;
        this.activePaymentT13 = property.weeks[12].payment_type; 
        // this.activeTerms13 = property.weeks[12].terms;

        this.activeSeason14 = property.weeks[13].season; this.activeModule14 = property.weeks[13].module;
        this.activePrice14 = property.weeks[13].price; this.activeAvail14 = property.weeks[13].availability;
        this.activeFirstName14 = property.weeks[13].owner_name;
        this.activeLastName14 = property.weeks[13].owner_last_name;
        this.activeEmail14 = property.weeks[13].email; this.activeSoldPrice14 = property.weeks[13].sold_price;
        this.activePhoneNumber14 = property.weeks[13].phone_number;
        this.activePaymentT14 = property.weeks[13].payment_type; 
        // this.activeTerms14 = property.weeks[13].terms;

        this.activeSeason15 = property.weeks[14].season; this.activeModule15 = property.weeks[14].module;
        this.activePrice15 = property.weeks[14].price; this.activeAvail15 = property.weeks[14].availability;
        this.activeFirstName15 = property.weeks[14].owner_name;
        this.activeLastName15 = property.weeks[14].owner_last_name;
        this.activeEmail15 = property.weeks[14].email; this.activeSoldPrice15 = property.weeks[14].sold_price;
        this.activePhoneNumber15 = property.weeks[14].phone_number;
        this.activePaymentT15 = property.weeks[14].payment_type; 
        // this.activeTerms15 = property.weeks[14].terms;

        this.activeSeason16 = property.weeks[15].season; this.activeModule16 = property.weeks[15].module;
        this.activePrice16 = property.weeks[15].price; this.activeAvail16 = property.weeks[15].availability;
        this.activeFirstName16 = property.weeks[15].owner_name;
        this.activeLastName16 = property.weeks[15].owner_last_name;
        this.activeEmail16 = property.weeks[15].email; this.activeSoldPrice16 = property.weeks[15].sold_price;
        this.activePhoneNumber16 = property.weeks[15].phone_number;
        this.activePaymentT16 = property.weeks[15].payment_type; 
        // this.activeTerms16 = property.weeks[15].terms;

        this.activeSeason17 = property.weeks[16].season; this.activeModule17 = property.weeks[16].module;
        this.activePrice17 = property.weeks[16].price; this.activeAvail17 = property.weeks[16].availability;
        this.activeFirstName17 = property.weeks[16].owner_name;
        this.activeLastName17 = property.weeks[16].owner_last_name;
        this.activeEmail17 = property.weeks[16].email; this.activeSoldPrice17 = property.weeks[16].sold_price;
        this.activePhoneNumber17 = property.weeks[16].phone_number;
        this.activePaymentT17 = property.weeks[16].payment_type; 
        // this.activeTerms17 = property.weeks[16].terms;

        this.activeSeason18 = property.weeks[17].season; this.activeModule18 = property.weeks[17].module;
        this.activePrice18 = property.weeks[17].price; this.activeAvail18 = property.weeks[17].availability;
        this.activeFirstName18 = property.weeks[17].owner_name;
        this.activeLastName18 = property.weeks[17].owner_last_name;
        this.activeEmail18 = property.weeks[17].email; this.activeSoldPrice18 = property.weeks[17].sold_price;
        this.activePhoneNumber18 = property.weeks[17].phone_number;
        this.activePaymentT18 = property.weeks[17].payment_type; 
        // this.activeTerms18 = property.weeks[17].terms;

        this.activeSeason19 = property.weeks[18].season; this.activeModule19 = property.weeks[18].module;
        this.activePrice19 = property.weeks[18].price; this.activeAvail19 = property.weeks[18].availability;
        this.activeFirstName19 = property.weeks[18].owner_name;
        this.activeLastName19 = property.weeks[18].owner_last_name;
        this.activeEmail19 = property.weeks[18].email; this.activeSoldPrice19 = property.weeks[18].sold_price;
        this.activePhoneNumber19 = property.weeks[18].phone_number;
        this.activePaymentT19 = property.weeks[18].payment_type; 
        // this.activeTerms19 = property.weeks[18].terms;

        this.activeSeason20 = property.weeks[19].season; this.activeModule20 = property.weeks[19].module;
        this.activePrice20 = property.weeks[19].price; this.activeAvail20 = property.weeks[19].availability;
        this.activeFirstName20 = property.weeks[19].owner_name;
        this.activeLastName20 = property.weeks[19].owner_last_name;
        this.activeEmail20 = property.weeks[19].email; this.activeSoldPrice20 = property.weeks[19].sold_price;
        this.activePhoneNumber20 = property.weeks[19].phone_number;
        this.activePaymentT20 = property.weeks[19].payment_type; 
        // this.activeTerms20 = property.weeks[19].terms;

        this.activeSeason21 = property.weeks[20].season; this.activeModule21 = property.weeks[20].module;
        this.activePrice21 = property.weeks[20].price; this.activeAvail21 = property.weeks[20].availability;
        this.activeFirstName21 = property.weeks[20].owner_name;
        this.activeLastName21 = property.weeks[20].owner_last_name;
        this.activeEmail21 = property.weeks[20].email; this.activeSoldPrice21 = property.weeks[20].sold_price;
        this.activePhoneNumber21 = property.weeks[20].phone_number;
        this.activePaymentT21 = property.weeks[20].payment_type; 
        // this.activeTerms21 = property.weeks[20].terms;

        this.activeSeason22 = property.weeks[21].season; this.activeModule22 = property.weeks[21].module;
        this.activePrice22 = property.weeks[21].price; this.activeAvail22 = property.weeks[21].availability;
        this.activeFirstName22 = property.weeks[21].owner_name;
        this.activeLastName22 = property.weeks[21].owner_last_name;
        this.activeEmail22 = property.weeks[21].email; this.activeSoldPrice22 = property.weeks[21].sold_price;
        this.activePhoneNumber22 = property.weeks[21].phone_number;
        this.activePaymentT22 = property.weeks[21].payment_type; 
        // this.activeTerms22 = property.weeks[21].terms;

        this.activeSeason23 = property.weeks[22].season; this.activeModule23 = property.weeks[22].module;
        this.activePrice23 = property.weeks[22].price; this.activeAvail23 = property.weeks[22].availability;
        this.activeFirstName23 = property.weeks[22].owner_name;
        this.activeLastName23 = property.weeks[22].owner_last_name;
        this.activeEmail23 = property.weeks[22].email; this.activeSoldPrice23 = property.weeks[22].sold_price;
        this.activePhoneNumber23 = property.weeks[22].phone_number;
        this.activePaymentT23 = property.weeks[22].payment_type; 
        // this.activeTerms23 = property.weeks[22].terms;

        this.activeSeason24 = property.weeks[23].season; this.activeModule24 = property.weeks[23].module;
        this.activePrice24 = property.weeks[23].price; this.activeAvail24 = property.weeks[23].availability;
        this.activeFirstName24 = property.weeks[23].owner_name;
        this.activeLastName24 = property.weeks[23].owner_last_name;
        this.activeEmail24 = property.weeks[23].email; this.activeSoldPrice24 = property.weeks[23].sold_price;
        this.activePhoneNumber24 = property.weeks[23].phone_number;
        this.activePaymentT24 = property.weeks[23].payment_type;
        // this.activeTerms24 = property.weeks[23].terms;

        this.activeSeason25 = property.weeks[24].season; this.activeModule25 = property.weeks[24].module;
        this.activePrice25 = property.weeks[24].price; this.activeAvail25 = property.weeks[24].availability;
        this.activeFirstName25 = property.weeks[24].owner_name;
        this.activeLastName25 = property.weeks[24].owner_last_name;
        this.activeEmail25 = property.weeks[24].email; this.activeSoldPrice25 = property.weeks[24].sold_price;
        this.activePhoneNumber25 = property.weeks[24].phone_number;
        this.activePaymentT25 = property.weeks[24].payment_type; 
        // this.activeTerms25 = property.weeks[24].terms;

        this.activeSeason26 = property.weeks[25].season; this.activeModule26 = property.weeks[25].module;
        this.activePrice26 = property.weeks[25].price; this.activeAvail26 = property.weeks[25].availability;
        this.activeFirstName26 = property.weeks[25].owner_name;
        this.activeLastName26 = property.weeks[25].owner_last_name;
        this.activeEmail26 = property.weeks[25].email; this.activeSoldPrice26 = property.weeks[25].sold_price;
        this.activePhoneNumber26 = property.weeks[25].phone_number;
        this.activePaymentT26 = property.weeks[25].payment_type; 
        // this.activeTerms25 = property.weeks[26].terms;

        this.activeSeason27 = property.weeks[26].season; this.activeModule27 = property.weeks[26].module;
        this.activePrice27 = property.weeks[26].price; this.activeAvail27 = property.weeks[26].availability;
        this.activeFirstName27 = property.weeks[26].owner_name;
        this.activeLastName27 = property.weeks[26].owner_last_name;
        this.activeEmail27 = property.weeks[26].email; this.activeSoldPrice27 = property.weeks[27].sold_price;
        this.activePhoneNumber27 = property.weeks[26].phone_number;
        this.activePaymentT27 = property.weeks[26].payment_type; 
        // this.activeTerms27 = property.weeks[26].terms;

        this.activeSeason28 = property.weeks[27].season; this.activeModule28 = property.weeks[27].module;
        this.activePrice28 = property.weeks[27].price; this.activeAvail28 = property.weeks[27].availability;
        this.activeFirstName28 = property.weeks[27].owner_name;
        this.activeLastName28 = property.weeks[27].owner_last_name;
        this.activeEmail28 = property.weeks[27].email; this.activeSoldPrice28 = property.weeks[27].sold_price;
        this.activePhoneNumber28 = property.weeks[27].phone_number;
        this.activePaymentT28 = property.weeks[27].payment_type; 
        // this.activeTerms28 = property.weeks[27].terms;

        this.activeSeason29 = property.weeks[28].season; this.activeModule29 = property.weeks[28].module;
        this.activePrice29 = property.weeks[28].price; this.activeAvail29 = property.weeks[28].availability;
        this.activeFirstName29 = property.weeks[28].owner_name;
        this.activeLastName29 = property.weeks[28].owner_last_name;
        this.activeEmail29 = property.weeks[28].email; this.activeSoldPrice29 = property.weeks[28].sold_price;
        this.activePhoneNumber29 = property.weeks[28].phone_number;
        this.activePaymentT29 = property.weeks[28].payment_type; 
        // this.activeTerms29 = property.weeks[28].terms;

        this.activeSeason30 = property.weeks[29].season; this.activeModule30 = property.weeks[29].module;
        this.activePrice30 = property.weeks[29].price; this.activeAvail30 = property.weeks[29].availability;
        this.activeFirstName30 = property.weeks[29].owner_name;
        this.activeLastName30 = property.weeks[29].owner_last_name;
        this.activeEmail30 = property.weeks[29].email; this.activeSoldPrice30 = property.weeks[29].sold_price;
        this.activePhoneNumber30 = property.weeks[29].phone_number;
        this.activePaymentT30 = property.weeks[29].payment_type; 
        // this.activeTerms30 = property.weeks[29].terms;

        this.activeSeason31 = property.weeks[30].season; this.activeModule31 = property.weeks[30].module;
        this.activePrice31 = property.weeks[30].price; this.activeAvail31 = property.weeks[30].availability;
        this.activeFirstName31 = property.weeks[30].owner_name;
        this.activeLastName31 = property.weeks[30].owner_last_name;
        this.activeEmail31 = property.weeks[30].email; this.activeSoldPrice31 = property.weeks[30].sold_price;
        this.activePhoneNumber31 = property.weeks[30].phone_number;
        this.activePaymentT31 = property.weeks[30].payment_type; 
        // this.activeTerms31 = property.weeks[30].terms;

        this.activeSeason32 = property.weeks[31].season; this.activeModule32 = property.weeks[31].module;
        this.activePrice32 = property.weeks[31].price; this.activeAvail32 = property.weeks[31].availability;
        this.activeFirstName32 = property.weeks[31].owner_name;
        this.activeLastName32 = property.weeks[31].owner_last_name;
        this.activeEmail32 = property.weeks[31].email; this.activeSoldPrice32 = property.weeks[31].sold_price;
        this.activePhoneNumber32 = property.weeks[31].phone_number;
        this.activePaymentT32 = property.weeks[31].payment_type; 
        // this.activeTerms32 = property.weeks[31].terms;

        this.activeSeason33 = property.weeks[32].season; this.activeModule33 = property.weeks[32].module;
        this.activePrice33 = property.weeks[32].price; this.activeAvail33 = property.weeks[32].availability;
        this.activeFirstName33 = property.weeks[32].owner_name;
        this.activeLastName33 = property.weeks[32].owner_last_name;
        this.activeEmail33 = property.weeks[32].email; this.activeSoldPrice33 = property.weeks[32].sold_price;
        this.activePhoneNumber33 = property.weeks[32].phone_number;
        this.activePaymentT33 = property.weeks[32].payment_type; 
        // this.activeTerms33 = property.weeks[32].terms;

        this.activeSeason34 = property.weeks[33].season; this.activeModule34 = property.weeks[33].module;
        this.activePrice34 = property.weeks[33].price; this.activeAvail34 = property.weeks[33].availability;
        this.activeFirstName34 = property.weeks[33].owner_name;
        this.activeLastName34 = property.weeks[33].owner_last_name;
        this.activeEmail34 = property.weeks[33].email; this.activeSoldPrice34 = property.weeks[33].sold_price;
        this.activePhoneNumber34 = property.weeks[33].phone_number;
        this.activePaymentT34 = property.weeks[33].payment_type; 
        // this.activeTerms34 = property.weeks[33].terms;

        this.activeSeason35 = property.weeks[34].season; this.activeModule35 = property.weeks[34].module;
        this.activePrice35 = property.weeks[34].price; this.activeAvail35 = property.weeks[34].availability;
        this.activeFirstName35 = property.weeks[34].owner_name;
        this.activeLastName35 = property.weeks[34].owner_last_name;
        this.activeEmail35 = property.weeks[34].email; this.activeSoldPrice35 = property.weeks[34].sold_price;
        this.activePhoneNumber35 = property.weeks[34].phone_number;
        this.activePaymentT35 = property.weeks[34].payment_type; 
        // this.activeTerms35 = property.weeks[34].terms;

        this.activeSeason36 = property.weeks[35].season; this.activeModule36 = property.weeks[35].module;
        this.activePrice36 = property.weeks[35].price; this.activeAvail36 = property.weeks[35].availability;
        this.activeFirstName36 = property.weeks[35].owner_name;
        this.activeLastName36 = property.weeks[35].owner_last_name;
        this.activeEmail36 = property.weeks[35].email; this.activeSoldPrice36 = property.weeks[35].sold_price;
        this.activePhoneNumber36 = property.weeks[35].phone_number;
        this.activePaymentT36 = property.weeks[35].payment_type; 
        // this.activeTerms36 = property.weeks[35].terms;

        this.activeSeason37 = property.weeks[36].season; this.activeModule37 = property.weeks[36].module;
        this.activePrice37 = property.weeks[36].price; this.activeAvail37 = property.weeks[36].availability;
        this.activeFirstName37 = property.weeks[36].owner_name;
        this.activeLastName37 = property.weeks[36].owner_last_name;
        this.activeEmail37 = property.weeks[36].email; this.activeSoldPrice37 = property.weeks[36].sold_price;
        this.activePhoneNumber37 = property.weeks[36].phone_number;
        this.activePaymentT37 = property.weeks[36].payment_type; 
        // this.activeTerms36 = property.weeks[37].terms;

        this.activeSeason38 = property.weeks[37].season; this.activeModule38 = property.weeks[37].module;
        this.activePrice38 = property.weeks[37].price; this.activeAvail38 = property.weeks[37].availability;
        this.activeFirstName38 = property.weeks[37].owner_name;
        this.activeLastName38 = property.weeks[37].owner_last_name;
        this.activeEmail38 = property.weeks[37].email; this.activeSoldPrice38 = property.weeks[37].sold_price;
        this.activePhoneNumber38 = property.weeks[37].phone_number;
        this.activePaymentT38 = property.weeks[37].payment_type; 
        // this.activeTerms38 = property.weeks[37].terms;

        this.activeSeason39 = property.weeks[38].season; this.activeModule39 = property.weeks[38].module;
        this.activePrice39 = property.weeks[38].price; this.activeAvail39 = property.weeks[38].availability;
        this.activeFirstName39 = property.weeks[38].owner_name;
        this.activeLastName39 = property.weeks[38].owner_last_name;
        this.activeEmail39 = property.weeks[38].email; this.activeSoldPrice39 = property.weeks[38].sold_price;
        this.activePhoneNumber39 = property.weeks[38].phone_number;
        this.activePaymentT39 = property.weeks[38].payment_type; 
        // this.activeTerms39 = property.weeks[39].terms;

        this.activeSeason40 = property.weeks[39].season; this.activeModule40 = property.weeks[39].module;
        this.activePrice40 = property.weeks[39].price; this.activeAvail40 = property.weeks[39].availability;
        this.activeFirstName40 = property.weeks[39].owner_name;
         this.activeLastName40 = property.weeks[39].owner_last_name;
        this.activeEmail40 = property.weeks[39].email; this.activeSoldPrice40 = property.weeks[39].sold_price;
        this.activePhoneNumber40 = property.weeks[39].phone_number;
        this.activePaymentT40 = property.weeks[39].payment_type; 
        // this.activeTerms40 = property.weeks[39].terms;

        this.activeSeason41 = property.weeks[40].season; this.activeModule41 = property.weeks[40].module;
        this.activePrice41 = property.weeks[40].price; this.activeAvail41 = property.weeks[40].availability;
        this.activeFirstName41 = property.weeks[40].owner_name;
        this.activeLastName41 = property.weeks[40].owner_last_name;
        this.activeEmail41 = property.weeks[40].email; this.activeSoldPrice41 = property.weeks[40].sold_price;
        this.activePhoneNumber41 = property.weeks[40].phone_number;
        this.activePaymentT41 = property.weeks[40].payment_type; 
        // this.activeTerms41 = property.weeks[40].terms;

        this.activeSeason42 = property.weeks[41].season; this.activeModule42 = property.weeks[41].module;
        this.activePrice42 = property.weeks[41].price; this.activeAvail42 = property.weeks[41].availability;
        this.activeFirstName42 = property.weeks[41].owner_name;
        this.activeLastName42 = property.weeks[41].owner_last_name;
        this.activeEmail42 = property.weeks[41].email; this.activeSoldPrice42 = property.weeks[41].sold_price;
        this.activePhoneNumber42 = property.weeks[41].phone_number;
        this.activePaymentT42 = property.weeks[41].payment_type; 
        // this.activeTerms42 = property.weeks[41].terms;

        this.activeSeason43 = property.weeks[42].season; this.activeModule43 = property.weeks[42].module;
        this.activePrice43 = property.weeks[42].price; this.activeAvail43 = property.weeks[42].availability;
        this.activeFirstName43 = property.weeks[42].owner_name;
        this.activeLastName43 = property.weeks[42].owner_last_name;
        this.activeEmail43 = property.weeks[42].email; this.activeSoldPrice43 = property.weeks[42].sold_price;
        this.activePhoneNumber43 = property.weeks[42].phone_number;
        this.activePaymentT43 = property.weeks[42].payment_type; 
        // this.activeTerms43 = property.weeks[42].terms;

        this.activeSeason44 = property.weeks[43].season; this.activeModule44 = property.weeks[43].module;
        this.activePrice44 = property.weeks[43].price; this.activeAvail44 = property.weeks[43].availability;
        this.activeFirstName44 = property.weeks[43].owner_name;
        this.activeLastName44 = property.weeks[43].owner_last_name;
        this.activeEmail44 = property.weeks[43].email; this.activeSoldPrice44 = property.weeks[43].sold_price;
        this.activePhoneNumber44 = property.weeks[43].phone_number;
        this.activePaymentT44 = property.weeks[43].payment_type; 
        // this.activeTerms44 = property.weeks[43].terms;

        this.activeSeason45 = property.weeks[44].season; this.activeModule45 = property.weeks[44].module;
        this.activePrice45 = property.weeks[44].price; this.activeAvail45 = property.weeks[44].availability;
        this.activeFirstName45 = property.weeks[44].owner_name;
        this.activeLastName45 = property.weeks[44].owner_last_name;
        this.activeEmail45 = property.weeks[44].email; this.activeSoldPrice45 = property.weeks[44].sold_price;
        this.activePhoneNumber45 = property.weeks[44].phone_number;
        this.activePaymentT45 = property.weeks[44].payment_type; 
        // this.activeTerms45 = property.weeks[44].terms;

        this.activeSeason46 = property.weeks[45].season; this.activeModule46 = property.weeks[45].module;
        this.activePrice46 = property.weeks[45].price; this.activeAvail46 = property.weeks[45].availability;
        this.activeFirstName46 = property.weeks[45].owner_name;
        this.activeLastName46 = property.weeks[45].owner_last_name;
        this.activeEmail46 = property.weeks[45].email; this.activeSoldPrice46 = property.weeks[45].sold_price;
        this.activePhoneNumber46 = property.weeks[45].phone_number;
        this.activePaymentT46 = property.weeks[45].payment_type; 
        // this.activeTerms46 = property.weeks[45].terms;

        this.activeSeason47 = property.weeks[46].season; this.activeModule47 = property.weeks[46].module;
        this.activePrice47 = property.weeks[46].price; this.activeAvail47 = property.weeks[46].availability;
        this.activeFirstName47 = property.weeks[46].owner_name;
        this.activeLastName47 = property.weeks[46].owner_last_name;
        this.activeEmail47 = property.weeks[46].email; this.activeSoldPrice47 = property.weeks[46].sold_price;
        this.activePhoneNumber47 = property.weeks[46].phone_number;
        this.activePaymentT47 = property.weeks[46].payment_type; 
        // this.activeTerms47 = property.weeks[46].terms;

        this.activeSeason48 = property.weeks[47].season; this.activeModule48 = property.weeks[47].module;
        this.activePrice48 = property.weeks[47].price; this.activeAvail48 = property.weeks[47].availability;
        this.activeFirstName48 = property.weeks[47].owner_name;
        this.activeLastName48 = property.weeks[47].owner_last_name;
        this.activeEmail48 = property.weeks[47].email; this.activeSoldPrice48 = property.weeks[47].sold_price;
        this.activePhoneNumber48 = property.weeks[47].phone_number;
        this.activePaymentT48 = property.weeks[47].payment_type; 
        // this.activeTerms48 = property.weeks[47].terms;

        this.activeSeason49 = property.weeks[48].season; this.activeModule49 = property.weeks[48].module;
        this.activePrice49 = property.weeks[48].price; this.activeAvail49 = property.weeks[48].availability;
        this.activeFirstName49 = property.weeks[48].owner_name;
        this.activeLastName49 = property.weeks[48].owner_last_name;
        this.activeEmail49 = property.weeks[48].email; this.activeSoldPrice49 = property.weeks[48].sold_price;
        this.activePhoneNumber49 = property.weeks[48].phone_number;
        this.activePaymentT49 = property.weeks[48].payment_type;
        // this.activeTerms49 = property.weeks[48].terms;

        this.activeSeason50 = property.weeks[49].season; this.activeModule50 = property.weeks[49].module;
        this.activePrice50 = property.weeks[49].price; this.activeAvail50 = property.weeks[49].availability;
        this.activeFirstName50 = property.weeks[49].owner_name;
        this.activeLastName50 = property.weeks[49].owner_last_name;
        this.activeEmail50 = property.weeks[49].email; this.activeSoldPrice50 = property.weeks[49].sold_price;
        this.activePhoneNumber50 = property.weeks[49].phone_number;
        this.activePaymentT50 = property.weeks[49].payment_type;
        // this.activeTerms50 = property.weeks[49].terms;

        this.activeSeason51 = property.weeks[50].season; this.activeModule51 = property.weeks[50].module;
        this.activePrice51 = property.weeks[50].price; this.activeAvail51 = property.weeks[50].availability;
        this.activeFirstName51 = property.weeks[50].owner_name;
        this.activeLastName51 = property.weeks[50].owner_last_name;
        this.activeEmail51 = property.weeks[50].email; this.activeSoldPrice51 = property.weeks[50].sold_price;
        this.activePhoneNumber51 = property.weeks[50].phone_number;
        this.activePaymentT51 = property.weeks[50].payment_type;
        // this.activeTerms51 = property.weeks[50].terms;

        this.activeSeason52 = property.weeks[51].season; this.activeModule52 = property.weeks[51].module;
        this.activePrice52 = property.weeks[51].price; this.activeAvail52 = property.weeks[51].availability;
        this.activeFirstName52 = property.weeks[51].owner_name;
        this.activeLastName52 = property.weeks[51].owner_last_name;
        this.activeEmail52 = property.weeks[51].email; this.activeSoldPrice52 = property.weeks[51].sold_price;
        this.activePhoneNumber52 = property.weeks[51].phone_number;
        this.activePaymentT52 = property.weeks[51].payment_type;
        // this.activeTerms52 = property.weeks[51].terms;

    }

    updateProperty() {
        let updProperty: Object = {
            id: this.activeKey,
            property_name: this.activePropertyName,
            property_size: this.activePropertySize,
            extra_info: this.activeExtraInfo,
            weeks: [
                {// week1
                    week: 1,
                    season: this.activeSeason1,
                    module: this.activeModule1,
                    arrival_date: "13/01/2017",
                    departure_date: "20/01/2017",
                    price: this.activePrice1,
                    availability: this.activeAvail1,
                    owner_name: this.activeFirstName1,
                    owner_last_name: this.activeLastName1,
                    phone_number: this.activePhoneNumber1,
                    email: this.activeEmail1,
                    sold_price: this.activeSoldPrice1,
                    payment_type: this.activePaymentT1,
                    // terms: this.activeTerms1
                }
                , { // week2
                    week: 2,
                    season: this.activeSeason2,
                    module: this.activeModule2,
                    arrival_date: "20/01/2017",
                    departure_date: "27/01/2017",
                    price: this.activePrice2,
                    availability: this.activeAvail2,
                    owner_name: this.activeFirstName2,
                    owner_last_name: this.activeLastName2,
                    phone_number: this.activePhoneNumber2,
                    email: this.activeEmail2,
                    sold_price: this.activeSoldPrice2,
                    payment_type: this.activePaymentT2,
                    // terms: this.activeTerms2
                }, { // week3
                    week: 3,
                    season: this.activeSeason3,
                    module: this.activeModule3,
                    arrival_date: "27/01/2017",
                    departure_date: "03/02/2017",
                    price: this.activePrice3,
                    availability: this.activeAvail3,
                    owner_name: this.activeFirstName3,
                    owner_last_name: this.activeLastName3,
                    phone_number: this.activePhoneNumber3,
                    email: this.activeEmail3,
                    sold_price: this.activeSoldPrice3,
                    payment_type: this.activePaymentT3,
                    // terms: this.activeTerms3
                }, { // week4
                    week: 4,
                    season: this.activeSeason4,
                    module: this.activeModule4,
                    arrival_date: "03/02/2017",
                    departure_date: "10/02/2017",
                    price: this.activePrice4,
                    availability: this.activeAvail4,
                    owner_name: this.activeFirstName4,
                    owner_last_name: this.activeLastName4,
                    phone_number: this.activePhoneNumber4,
                    email: this.activeEmail4,
                    sold_price: this.activeSoldPrice4,
                    payment_type: this.activePaymentT4,
                    // terms: this.activeTerms4
                }, { // week5
                    week: 5,
                    season: this.activeSeason5,
                    module: this.activeModule5,
                    arrival_date: "10/02/2017",
                    departure_date: "17/02/2017",
                    price: this.activePrice5,
                    availability: this.activeAvail5,
                    owner_name: this.activeFirstName5,
                    owner_last_name: this.activeLastName5,
                    phone_number: this.activePhoneNumber5,
                    email: this.activeEmail5,
                    sold_price: this.activeSoldPrice5,
                    payment_type: this.activePaymentT5,
                    // terms: this.activeTerms5
                }, { // week6
                    week: 6,
                    season: this.activeSeason6,
                    module: this.activeModule6,
                    arrival_date: "17/02/2017",
                    departure_date: "24/02/2017",
                    price: this.activePrice6,
                    availability: this.activeAvail6,
                    owner_name: this.activeFirstName6,
                    owner_last_name: this.activeLastName6,
                    phone_number: this.activePhoneNumber6,
                    email: this.activeEmail6,
                    sold_price: this.activeSoldPrice6,
                    payment_type: this.activePaymentT6,
                    // terms: this.activeTerms6
                }, { // week7
                    week: 7,
                    season: this.activeSeason7,
                    module: this.activeModule7,
                    arrival_date: "24/03/2017",
                    departure_date: "03/03/2017",
                    price: this.activePrice7,
                    availability: this.activeAvail7,
                    owner_name: this.activeFirstName7,
                    owner_last_name: this.activeLastName7,
                    phone_number: this.activePhoneNumber7,
                    email: this.activeEmail7,
                    sold_price: this.activeSoldPrice7,
                    payment_type: this.activePaymentT7,
                    // terms: this.activeTerms7
                }, { // week8
                    week: 8,
                    season: this.activeSeason8,
                    module: this.activeModule8,
                    arrival_date: "03/03/2017",
                    departure_date: "10/03/2017",
                    price: this.activePrice8,
                    availability: this.activeAvail8,
                    owner_name: this.activeFirstName8,
                    owner_last_name: this.activeLastName8,
                    phone_number: this.activePhoneNumber8,
                    email: this.activeEmail8,
                    sold_price: this.activeSoldPrice8,
                    payment_type: this.activePaymentT8,
                    // terms: this.activeTerms8
                }, { // week9
                    week: 9,
                    season: this.activeSeason9,
                    module: this.activeModule9,
                    arrival_date: "10/03/2017",
                    departure_date: "17/03/2017",
                    price: this.activePrice9,
                    availability: this.activeAvail9,
                    owner_name: this.activeFirstName9,
                    owner_last_name: this.activeLastName9,
                    phone_number: this.activePhoneNumber9,
                    email: this.activeEmail9,
                    sold_price: this.activeSoldPrice9,
                    payment_type: this.activePaymentT9,
                    // terms: this.activeTerms9
                }, { // week10
                    week: 10,
                    season: this.activeSeason10,
                    module: this.activeModule10,
                    arrival_date: "17/03/2017",
                    departure_date: "24/03/2017",
                    price: this.activePrice10,
                    availability: this.activeAvail10,
                    owner_name: this.activeFirstName10,
                    owner_last_name: this.activeLastName10,
                    phone_number: this.activePhoneNumber10,
                    email: this.activeEmail10,
                    sold_price: this.activeSoldPrice10,
                    payment_type: this.activePaymentT10,
                    // terms: this.activeTerms10
                }, { // week11
                    week: 11,
                    season: this.activeSeason11,
                    module: this.activeModule11,
                    arrival_date: "24/03/2017",
                    departure_date: "31/03/2017",
                    price: this.activePrice11,
                    availability: this.activeAvail1,
                    owner_name: this.activeFirstName11,
                    owner_last_name: this.activeLastName11,
                    phone_number: this.activePhoneNumber11,
                    email: this.activeEmail11,
                    sold_price: this.activeSoldPrice11,
                    payment_type: this.activePaymentT11,
                    // terms: this.activeTerms11
                }, { // week12
                    week: 12,
                    season: this.activeSeason12,
                    module: this.activeModule12,
                    arrival_date: "31/03/2017",
                    departure_date: "07/04/2017",
                    price: this.activePrice12,
                    availability: this.activeAvail12,
                    owner_name: this.activeFirstName12,
                    owner_last_name: this.activeLastName12,
                    phone_number: this.activePhoneNumber12,
                    email: this.activeEmail12,
                    sold_price: this.activeSoldPrice12,
                    payment_type: this.activePaymentT12,
                    // terms: this.activeTerms12
                }, { // week13
                    week: 13,
                    season: this.activeSeason13,
                    module: this.activeModule13,
                    arrival_date: "07/04/2017",
                    departure_date: "14/04/2017",
                    price: this.activePrice13,
                    availability: this.activeAvail13,
                    owner_name: this.activeFirstName13,
                    owner_last_name: this.activeLastName13,
                    phone_number: this.activePhoneNumber13,
                    email: this.activeEmail13,
                    sold_price: this.activeSoldPrice13,
                    payment_type: this.activePaymentT13,
                    // terms: this.activeTerms13
                }, { // week14
                    week: 14,
                    season: this.activeSeason14,
                    module: this.activeModule14,
                    arrival_date: "14/04/2017",
                    departure_date: "21/04/2017",
                    price: this.activePrice14,
                    availability: this.activeAvail14,
                    owner_name: this.activeFirstName14,
                    owner_last_name: this.activeLastName14,
                    phone_number: this.activePhoneNumber14,
                    email: this.activeEmail14,
                    sold_price: this.activeSoldPrice14,
                    payment_type: this.activePaymentT14,
                    // terms: this.activeTerms14
                }, { // week15
                    week: 15,
                    season: this.activeSeason15,
                    module: this.activeModule15,
                    arrival_date: "21/04/2017",
                    departure_date: "28/04/2017",
                    price: this.activePrice15,
                    availability: this.activeAvail15,
                    owner_name: this.activeFirstName15,
                    owner_last_name: this.activeLastName15,
                    phone_number: this.activePhoneNumber15,
                    email: this.activeEmail15,
                    sold_price: this.activeSoldPrice15,
                    payment_type: this.activePaymentT15,
                    // terms: this.activeTerms15
                }, { // week16
                    week: 16,
                    season: this.activeSeason16,
                    module: this.activeModule16,
                    arrival_date: "28/04/2017",
                    departure_date: "05/05/2017",
                    price: this.activePrice16,
                    availability: this.activeAvail16,
                    owner_name: this.activeFirstName16,
                    owner_last_name: this.activeLastName16,
                    phone_number: this.activePhoneNumber16,
                    email: this.activeEmail16,
                    sold_price: this.activeSoldPrice16,
                    payment_type: this.activePaymentT16,
                    // terms: this.activeTerms16
                }, { // week17
                    week: 17,
                    season: this.activeSeason17,
                    module: this.activeModule17,
                    arrival_date: "05/05/2017",
                    departure_date: "12/05/2017",
                    price: this.activePrice17,
                    availability: this.activeAvail17,
                    owner_name: this.activeFirstName17,
                    owner_last_name: this.activeLastName17,
                    phone_number: this.activePhoneNumber17,
                    email: this.activeEmail17,
                    sold_price: this.activeSoldPrice17,
                    payment_type: this.activePaymentT17,
                    // terms: this.activeTerms17
                }, { // week18
                    week: 18,
                    season: this.activeSeason18,
                    module: this.activeModule18,
                    arrival_date: "12/05/2017",
                    departure_date: "19/05/2017",
                    price: this.activePrice18,
                    availability: this.activeAvail18,
                    owner_name: this.activeFirstName18,
                    owner_last_name: this.activeLastName18,
                    phone_number: this.activePhoneNumber18,
                    email: this.activeEmail18,
                    sold_price: this.activeSoldPrice18,
                    payment_type: this.activePaymentT18,
                    // terms: this.activeTerms18
                }, { // week19
                    week: 19,
                    season: this.activeSeason19,
                    module: this.activeModule19,
                    arrival_date: "19/05/2017",
                    departure_date: "26/05/2017",
                    price: this.activePrice19,
                    availability: this.activeAvail19,
                    owner_name: this.activeFirstName19,
                    owner_last_name: this.activeLastName19,
                    phone_number: this.activePhoneNumber19,
                    email: this.activeEmail19,
                    sold_price: this.activeSoldPrice19,
                    payment_type: this.activePaymentT19,
                    // terms: this.activeTerms19
                }, { // week20
                    week: 20,
                    season: this.activeSeason20,
                    module: this.activeModule20,
                    arrival_date: "26/05/2017",
                    departure_date: "02/06/2017",
                    price: this.activePrice20,
                    availability: this.activeAvail20,
                    owner_name: this.activeFirstName20,
                    owner_last_name: this.activeLastName20,
                    phone_number: this.activePhoneNumber20,
                    email: this.activeEmail20,
                    sold_price: this.activeSoldPrice20,
                    payment_type: this.activePaymentT20,
                    // terms: this.activeTerms20
                }, { // week21
                    week: 21,
                    season: this.activeSeason21,
                    module: this.activeModule21,
                    arrival_date: "02/06/2017",
                    departure_date: "09/06/2017",
                    price: this.activePrice21,
                    availability: this.activeAvail21,
                    owner_name: this.activeFirstName21,
                    owner_last_name: this.activeLastName21,
                    phone_number: this.activePhoneNumber21,
                    email: this.activeEmail21,
                    sold_price: this.activeSoldPrice21,
                    payment_type: this.activePaymentT21,
                    // terms: this.activeTerms21
                }, { // week22
                    week: 22,
                    season: this.activeSeason22,
                    module: this.activeModule22,
                    arrival_date: "09/06/2017",
                    departure_date: "16/06/2017",
                    price: this.activePrice22,
                    availability: this.activeAvail22,
                    owner_name: this.activeFirstName22,
                    owner_last_name: this.activeLastName22,
                    phone_number: this.activePhoneNumber22,
                    email: this.activeEmail22,
                    sold_price: this.activeSoldPrice22,
                    payment_type: this.activePaymentT22,
                    // terms: this.activeTerms22
                }, { // week23
                    week: 23,
                    season: this.activeSeason23,
                    module: this.activeModule23,
                    arrival_date: "16/06/2017",
                    departure_date: "23/06/2017",
                    price: this.activePrice23,
                    availability: this.activeAvail23,
                    owner_name: this.activeFirstName23,
                    owner_last_name: this.activeLastName23,
                    phone_number: this.activePhoneNumber23,
                    email: this.activeEmail23,
                    sold_price: this.activeSoldPrice23,
                    payment_type: this.activePaymentT23,
                    // terms: this.activeTerms23
                }, { // week24
                    week: 24,
                    season: this.activeSeason24,
                    module: this.activeModule24,
                    arrival_date: "23/06/2017",
                    departure_date: "30/06/2017",
                    price: this.activePrice24,
                    availability: this.activeAvail24,
                    owner_name: this.activeFirstName24,
                    owner_last_name: this.activeLastName24,
                    phone_number: this.activePhoneNumber24,
                    email: this.activeEmail24,
                    sold_price: this.activeSoldPrice24,
                    payment_type: this.activePaymentT24,
                    // terms: this.activeTerms24
                }, { // week25
                    week: 25,
                    season: this.activeSeason25,
                    module: this.activeModule25,
                    arrival_date: "30/06/2017",
                    departure_date: "07/07/2017",
                    price: this.activePrice25,
                    availability: this.activeAvail25,
                    owner_name: this.activeFirstName25,
                    owner_last_name: this.activeLastName25,
                    phone_number: this.activePhoneNumber25,
                    email: this.activeEmail25,
                    sold_price: this.activeSoldPrice25,
                    payment_type: this.activePaymentT25,
                    // terms: this.activeTerms25
                }, { // week26
                    week: 26,
                    season: this.activeSeason26,
                    module: this.activeModule26,
                    arrival_date: "07/07/2017",
                    departure_date: "14/07/2017",
                    price: this.activePrice26,
                    availability: this.activeAvail26,
                    owner_name: this.activeFirstName26,
                    owner_last_name: this.activeLastName26,
                    phone_number: this.activePhoneNumber26,
                    email: this.activeEmail26,
                    sold_price: this.activeSoldPrice26,
                    payment_type: this.activePaymentT26,
                    // terms: this.activeTerms26
                }, { // week27
                    week: 27,
                    season: this.activeSeason27,
                    module: this.activeModule27,
                    arrival_date: "14/07/2017",
                    departure_date: "21/07/2017",
                    price: this.activePrice27,
                    availability: this.activeAvail27,
                    owner_name: this.activeFirstName27,
                    owner_last_name: this.activeLastName27,
                    phone_number: this.activePhoneNumber27,
                    email: this.activeEmail27,
                    sold_price: this.activeSoldPrice27,
                    payment_type: this.activePaymentT27,
                    // terms: this.activeTerms27
                }, { // week28
                    week: 28,
                    season: this.activeSeason28,
                    module: this.activeModule28,
                    arrival_date: "21/07/2017",
                    departure_date: "28/07/2017",
                    price: this.activePrice28,
                    availability: this.activeAvail28,
                    owner_name: this.activeFirstName28,
                    owner_last_name: this.activeLastName28,
                    phone_number: this.activePhoneNumber28,
                    email: this.activeEmail28,
                    sold_price: this.activeSoldPrice28,
                    payment_type: this.activePaymentT28,
                    // terms: this.activeTerms28
                }, { // week29
                    week: 29,
                    season: this.activeSeason29,
                    module: this.activeModule29,
                    arrival_date: "28/07/2017",
                    departure_date: "04/08/2017",
                    price: this.activePrice29,
                    availability: this.activeAvail29,
                    owner_name: this.activeFirstName29,
                    owner_last_name: this.activeLastName29,
                    phone_number: this.activePhoneNumber29,
                    email: this.activeEmail29,
                    sold_price: this.activeSoldPrice29,
                    payment_type: this.activePaymentT29,
                    // terms: this.activeTerms29
                }, { // week30
                    week: 30,
                    season: this.activeSeason30,
                    module: this.activeModule30,
                    arrival_date: "04/08/2017",
                    departure_date: "11/08/2017",
                    price: this.activePrice30,
                    availability: this.activeAvail30,
                    owner_name: this.activeFirstName30,
                    owner_last_name: this.activeLastName30,
                    phone_number: this.activePhoneNumber30,
                    email: this.activeEmail30,
                    sold_price: this.activeSoldPrice30,
                    payment_type: this.activePaymentT30,
                    // terms: this.activeTerms30
                }, { // week31
                    week: 31,
                    season: this.activeSeason31,
                    module: this.activeModule31,
                    arrival_date: "11/08/2017",
                    departure_date: "18/08/2017",
                    price: this.activePrice31,
                    availability: this.activeAvail31,
                    owner_name: this.activeFirstName31,
                    owner_last_name: this.activeLastName31,
                    phone_number: this.activePhoneNumber31,
                    email: this.activeEmail31,
                    sold_price: this.activeSoldPrice31,
                    payment_type: this.activePaymentT31,
                    // terms: this.activeTerms31
                }, { // week32
                    week: 32,
                    season: this.activeSeason32,
                    module: this.activeModule32,
                    arrival_date: "18/08/2017",
                    departure_date: "28/08/2017",
                    price: this.activePrice32,
                    availability: this.activeAvail32,
                    owner_name: this.activeFirstName32,
                    owner_last_name: this.activeLastName32,
                    phone_number: this.activePhoneNumber32,
                    email: this.activeEmail32,
                    sold_price: this.activeSoldPrice32,
                    payment_type: this.activePaymentT33,
                    // terms: this.activeTerms33
                }, { // week33
                    week: 33,
                    season: this.activeSeason33,
                    module: this.activeModule33,
                    arrival_date: "28/08/2017",
                    departure_date: "01/09/2017",
                    price: this.activePrice33,
                    availability: this.activeAvail33,
                    owner_name: this.activeFirstName33,
                    owner_last_name: this.activeLastName33,
                    phone_number: this.activePhoneNumber33,
                    email: this.activeEmail33,
                    sold_price: this.activeSoldPrice33,
                    payment_type: this.activePaymentT33,
                    // terms: this.activeTerms33
                }, { // week34
                    week: 34,
                    season: this.activeSeason34,
                    module: this.activeModule34,
                    arrival_date: "01/09/2017",
                    departure_date: "08/09/2017",
                    price: this.activePrice34,
                    availability: this.activeAvail34,
                    owner_name: this.activeFirstName34,
                    owner_last_name: this.activeLastName34,
                    phone_number: this.activePhoneNumber34,
                    email: this.activeEmail34,
                    sold_price: this.activeSoldPrice34,
                    payment_type: this.activePaymentT34,
                    // terms: this.activeTerms34
                }, { // week35
                    week: 35,
                    season: this.activeSeason35,
                    module: this.activeModule35,
                    arrival_date: "08/09/2017",
                    departure_date: "15/09/2017",
                    price: this.activePrice35,
                    availability: this.activeAvail35,
                    owner_name: this.activeFirstName35,
                    owner_last_name: this.activeLastName35,
                    phone_number: this.activePhoneNumber35,
                    email: this.activeEmail35,
                    sold_price: this.activeSoldPrice35,
                    payment_type: this.activePaymentT35,
                    // terms: this.activeTerms35
                }, { // week36
                    week: 36,
                    season: this.activeSeason36,
                    module: this.activeModule36,
                    arrival_date: "15/09/2017",
                    departure_date: "22/09/2017",
                    price: this.activePrice36,
                    availability: this.activeAvail36,
                    owner_name: this.activeFirstName36,
                    owner_last_name: this.activeLastName36,
                    phone_number: this.activePhoneNumber36,
                    email: this.activeEmail36,
                    sold_price: this.activeSoldPrice36,
                    payment_type: this.activePaymentT36,
                    // terms: this.activeTerms36
                }, { // week37
                    week: 37,
                    season: this.activeSeason37,
                    module: this.activeModule37,
                    arrival_date: "22/09/2017",
                    departure_date: "29/09/2017",
                    price: this.activePrice37,
                    availability: this.activeAvail37,
                    owner_name: this.activeFirstName37,
                    owner_last_name: this.activeLastName37,
                    phone_number: this.activePhoneNumber37,
                    email: this.activeEmail37,
                    sold_price: this.activeSoldPrice37,
                    payment_type: this.activePaymentT37,
                    // terms: this.activeTerms37
                }, { // week38
                    week: 38,
                    season: this.activeSeason38,
                    module: this.activeModule38,
                    arrival_date: "29/09/2017",
                    departure_date: "06/10/2017",
                    price: this.activePrice38,
                    availability: this.activeAvail38,
                    owner_name: this.activeFirstName38,
                    owner_last_name: this.activeLastName38,
                    phone_number: this.activePhoneNumber38,
                    email: this.activeEmail38,
                    sold_price: this.activeSoldPrice38,
                    payment_type: this.activePaymentT38,
                    // terms: this.activeTerms38
                }, { // week39
                    week: 39,
                    season: this.activeSeason39,
                    module: this.activeModule39,
                    arrival_date: "06/10/2017",
                    departure_date: "13/10/2017",
                    price: this.activePrice39,
                    availability: this.activeAvail39,
                    owner_name: this.activeFirstName39,
                    owner_last_name: this.activeLastName39,
                    phone_number: this.activePhoneNumber39,
                    email: this.activeEmail39,
                    sold_price: this.activeSoldPrice39,
                    payment_type: this.activePaymentT39,
                    // terms: this.activeTerms39
                }, { // week40
                    week: 40,
                    season: this.activeSeason40,
                    module: this.activeModule40,
                    arrival_date: "13/10/2017",
                    departure_date: "20/10/2017",
                    price: this.activePrice40,
                    availability: this.activeAvail40,
                    owner_name: this.activeFirstName40,
                    owner_last_name: this.activeLastName40,
                    phone_number: this.activePhoneNumber40,
                    email: this.activeEmail40,
                    sold_price: this.activeSoldPrice40,
                    payment_type: this.activePaymentT40,
                    // terms: this.activeTerms40
                }, { // week41
                    week: 41,
                    season: this.activeSeason41,
                    module: this.activeModule41,
                    arrival_date: "20/10/2017",
                    departure_date: "27/10/2017",
                    price: this.activePrice41,
                    availability: this.activeAvail41,
                    owner_name: this.activeFirstName41,
                    owner_last_name: this.activeLastName41,
                    phone_number: this.activePhoneNumber41,
                    email: this.activeEmail41,
                    sold_price: this.activeSoldPrice41,
                    payment_type: this.activePaymentT41,
                    // terms: this.activeTerms41
                }, { // week42
                    week: 42,
                    season: this.activeSeason42,
                    module: this.activeModule42,
                    arrival_date: "27/10/2017",
                    departure_date: "03/11/2017",
                    price: this.activePrice42,
                    availability: this.activeAvail42,
                    owner_name: this.activeFirstName42,
                    owner_last_name: this.activeLastName42,
                    phone_number: this.activePhoneNumber42,
                    email: this.activeEmail42,
                    sold_price: this.activeSoldPrice42,
                    payment_type: this.activePaymentT42,
                    // terms: this.activeTerms42
                }, { // week43
                    week: 43,
                    season: this.activeSeason43,
                    module: this.activeModule43,
                    arrival_date: "03/11/2017",
                    departure_date: "10/11/2017",
                    price: this.activePrice43,
                    availability: this.activeAvail43,
                    owner_name: this.activeFirstName43,
                    owner_last_name: this.activeLastName43,
                    phone_number: this.activePhoneNumber43,
                    email: this.activeEmail43,
                    sold_price: this.activeSoldPrice43,
                    payment_type: this.activePaymentT43,
                    // terms: this.activeTerms43
                }, { // week44
                    week: 44,
                    season: this.activeSeason44,
                    module: this.activeModule44,
                    arrival_date: "10/11/2017",
                    departure_date: "17/11/2017",
                    price: this.activePrice44,
                    availability: this.activeAvail44,
                    owner_name: this.activeFirstName44,
                    owner_last_name: this.activeLastName44,
                    phone_number: this.activePhoneNumber44,
                    email: this.activeEmail44,
                    sold_price: this.activeSoldPrice44,
                    payment_type: this.activePaymentT44,
                    // terms: this.activeTerms44
                }, { // week45
                    week: 45,
                    season: this.activeSeason45,
                    module: this.activeModule45,
                    arrival_date: "17/11/2017",
                    departure_date: "24/11/2017",
                    price: this.activePrice45,
                    availability: this.activeAvail45,
                    owner_name: this.activeFirstName45,
                    owner_last_name: this.activeLastName45,
                    phone_number: this.activePhoneNumber45,
                    email: this.activeEmail45,
                    sold_price: this.activeSoldPrice45,
                    payment_type: this.activePaymentT45,
                    // terms: this.activeTerms45
                }, { // week46
                    week: 46,
                    season: this.activeSeason46,
                    module: this.activeModule46,
                    arrival_date: '24/11/2017',
                    departure_date: "01/12/2017",
                    price: this.activePrice46,
                    availability: this.activeAvail46,
                    owner_name: this.activeFirstName46,
                    owner_last_name: this.activeLastName46,
                    phone_number: this.activePhoneNumber46,
                    email: this.activeEmail46,
                    sold_price: this.activeSoldPrice46,
                    payment_type: this.activePaymentT46,
                    // terms: this.activeTerms46
                }, { // week47
                    week: 47,
                    season: this.activeSeason47,
                    module: this.activeModule47,
                    arrival_date: "01/12/2017",
                    departure_date: "08/12/2017",
                    price: this.activePrice47,
                    availability: this.activeAvail47,
                    owner_name: this.activeFirstName47,
                    owner_last_name: this.activeLastName47,
                    phone_number: this.activePhoneNumber47,
                    email: this.activeEmail47,
                    sold_price: this.activeSoldPrice47,
                    payment_type: this.activePaymentT47,
                    // terms: this.activeTerms47
                }, { // week48
                    week: 48,
                    season: this.activeSeason48,
                    module: this.activeModule48,
                    arrival_date: "08/12/2017",
                    departure_date: "15/12/2017",
                    price: this.activePrice48,
                    availability: this.activeAvail48,
                    owner_name: this.activeFirstName48,
                    owner_last_name: this.activeLastName48,
                    phone_number: this.activePhoneNumber48,
                    email: this.activeEmail48,
                    sold_price: this.activeSoldPrice48,
                    payment_type: this.activePaymentT48,
                    // terms: this.activeTerms48
                }, { // week49
                    week: 49,
                    season: this.activeSeason49,
                    module: this.activeModule49,
                    arrival_date: "15/12/2017",
                    departure_date: "22/12/2017",
                    price: 49,
                    availability: this.activeAvail49,
                    owner_name: this.activeFirstName49,
                    owner_last_name: this.activeLastName49,
                    phone_number: this.activePhoneNumber49,
                    email: this.activeEmail49,
                    sold_price: this.activeSoldPrice49,
                    payment_type: this.activePaymentT49,
                    // terms: this.activeTerms49
                }, { // week50
                    week: 50,
                    season: this.activeSeason50,
                    module: this.activeModule50,
                    arrival_date: "22/12/2017",
                    departure_date: "29/12/2017",
                    price: this.activePrice50,
                    availability: this.activeAvail50,
                    owner_name: this.activeFirstName50,
                    owner_last_name: this.activeLastName50,
                    phone_number: this.activePhoneNumber50,
                    email: this.activeEmail50,
                    sold_price: this.activeSoldPrice50,
                    payment_type: this.activePaymentT50,
                    // terms: this.activeTerms50
                }, { // week51
                    week: 51,
                    season: this.activeSeason51,
                    module: this.activeModule51,
                    arrival_date: "29/12/2017",
                    departure_date: "05/01/2018",
                    price: this.activePrice51,
                    availability: this.activeAvail51,
                    owner_name: this.activeFirstName51,
                    owner_last_name: this.activeLastName51,
                    phone_number: this.activePhoneNumber51,
                    email: this.activeEmail51,
                    sold_price: this.activeSoldPrice51,
                    payment_type: this.activePaymentT51,
                    // terms: this.activeTerms51
                }, { // week52
                    week: 52,
                    season: this.activeSeason52,
                    module: this.activeModule52,
                    arrival_date: "05/01/2018",
                    departure_date: "12/01/2018",
                    price: this.activePrice52,
                    availability: this.activeAvail52,
                    owner_name: this.activeFirstName52,
                    owner_last_name: this.activeLastName52,
                    phone_number: this.activePhoneNumber52,
                    email: this.activeEmail52,
                    sold_price: this.activeSoldPrice52,
                    payment_type: this.activePaymentT52,
                    // terms: this.activeTerms52
                }
            ]

        };
        this._firebaseService.updateProperty(this.activeKey, updProperty);
        this.changeState('default', '');
    }
}

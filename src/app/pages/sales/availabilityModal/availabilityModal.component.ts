import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'availabilityModal',
    template: require('./availabilityModal.html'),
    styles: [require('./availabilityModal.scss')]
})
export class AvailabilityModalComponent implements OnInit {
    selectedOption: String;

    constructor() { }

    ngOnInit() { }

    updateAvailability() {
        this.selectedOption = $('input:radio[name=availRadio]:checked').val();
        console.log(this.selectedOption);
        //document.querySelector('input[name="selector"]:checked').value;
    }
}
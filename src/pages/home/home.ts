import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  states =  [
            {id: 30, name: "Arizona"},
            {id: 269, name: "California"},
            {id: 135, name: "Florida"},
            {id: 1, name: "Washington"},
            ];

  methods = [
            {name: 'GetTestingLocationsbyStateId', buttonName: "Show Testing Locations"},
            {name: 'GetProfessionsByStateId', buttonName: "Show Professions"},
            ];

  list    : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    // restAgencyNtn(methodName,stateId); first start
  }

  restAgencyNtn(methodName,stateId) {
    this.restProvider.restAgencyNtn(methodName,stateId)
      .then(data => {
        this.list = data;
        // console.log(this.list);
      })
  }

}

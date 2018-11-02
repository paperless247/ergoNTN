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
            {name: 'GetProfessionsByStateId', buttonName: "Show Professions"},
            {name: 'GetTestingLocationsbyStateId', buttonName: "Show All Testing Locations"},
            {name: 'GetLocationByStateIdProfessionID', buttonName: "> Testing Locations"},
            ];

  list    : any;
  process = 'selectStates';
  stateId = 0;
  professionName: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    // restAgencyNtn(methodName,stateId); first start
  }

  selectStates() {
    this.list = this.states;
    this.process = 'selectStates';
  }

  restAgencyNtn(methodName,stateId,professionId,professionName) {
    this.restProvider.restAgencyNtn(methodName,stateId,professionId)
      .then(data => {
        this.list = data;
        // console.log(this.list);
      });
    this.professionName = professionName;
    this.process = methodName;
    this.stateId = stateId;
  }

}

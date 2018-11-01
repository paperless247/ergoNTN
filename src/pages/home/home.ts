import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    // getTestingLocationsbyStateId(stateid); first start
  }

  getTestingLocationsbyStateId(stateid) {
    this.restProvider.getTestingLocationsbyStateId(stateid)
      .then(data => {
        this.list = data;
        // console.log(this.testingLocations);
      })
  }

  getProfessionsByStateId(stateid) {
    this.restProvider.getProfessionsByStateId(stateid)
      .then(data => {
        this.list = data;
        // console.log(this.professions);
      })
  }

}

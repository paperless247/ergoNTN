import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://www.nationaltestingnetwork.com/publicsafetyjobs/agency.cfc?'

  constructor(public http: HttpClient) {
    // console.log('Hello RestProvider Provider');
  }

  getTestingLocationsbyStateId(stateid=30){ // first item of the dropdown list
  	return new Promise(resolve => {
  		this.http.get(this.apiUrl+'method=GetTestingLocationsbyStateId&stateid='+stateid).subscribe(data => {
  			resolve(data.DATA);
  		}, err => {
  		console.log(err);
  		});
  	});
  }

  getProfessionsByStateId(stateid=30){ // first item of the dropdown list
  	return new Promise(resolve => {
  		this.http.get(this.apiUrl+'method=GetProfessionsByStateId&stateid='+stateid).subscribe(data => {
  			resolve(data.DATA);
  		}, err => {
  		console.log(err);
  		});
  	});
  }

}

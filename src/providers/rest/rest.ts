import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    // console.log('Hello RestProvider Provider');
  }

  apiUrl = 'https://www.nationaltestingnetwork.com/publicsafetyjobs/agency.cfc?'

  restAgencyNtn(methodName,stateId,professionId){
  	return new Promise(resolve => {
  		this.http.get(this.apiUrl+'method='+methodName+'&stateid='+stateId+'&professionid='+professionId).subscribe(data => {
  			resolve(data.DATA);
  		}, err => {
  		console.log(err);
  		});
  	});
  }

}

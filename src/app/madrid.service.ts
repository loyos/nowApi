import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MadridService {

  constructor(private http: HttpClient) { }

  getPromos(){
    // return this.http.get('http://tumango.es/promos');
    return this.http.get('http://localhost:3000/promos');
  }

  addPromo(data){
    console.debug('data: ', data);
    return this.http.post('http://localhost:3000/promos', data);
  }

  deletePromo(id){
    return this.http.get('http://tumango.es/promos');
  }

  getByCatAndName(){
    return this.http.get('http://tumango.es/promos');
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MadridService {

  constructor(private http: HttpClient) { }

  getPromos(){
    return this.http.get('http://tumango.es/promos');
  }

  deletePromo(id){
    return this.http.get('http://tumango.es/promos');
  }

  getByCatAndName(){
    return this.http.get('http://tumango.es/promos');
  }
}
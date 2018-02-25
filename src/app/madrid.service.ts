import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MadridService {

  prod;
  dev;
  url;

  constructor(private http: HttpClient) { 
    this.prod = 'http://tumango.es/promos/';
    this.dev = 'http://localhost:3000/promos/';
    this.url = this.prod;
  }

  getPromos(){
    // return this.http.get('http://tumango.es/promos');
    return this.http.get(this.url);
  }

  getPromo(id){
    return this.http.get(this.url + id);
  }

  addPromo(data){
    console.debug('data: ', data);
    return this.http.post(this.url, data);
  }

  editPromo(data, id){
    console.debug('data: ', data);
    return this.http.put(this.url + id, data);
  }

  deletePromo(id){
    return this.http.delete(this.url +id);
  }

  getByCatAndName(){
    return this.http.get(this.url);
  }
}
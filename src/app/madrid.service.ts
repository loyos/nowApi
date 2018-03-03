import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MadridService {

  prod;
  dev;
  url;
  token;

  constructor(private http: HttpClient) { 
    this.prod = 'http://tumango.es/promos/';
    this.dev = 'http://localhost:3000/promos/';
    this.url = this.prod;
  }

  login(user){
    return this.http.post('http://tumango.es/login', user);
  }

  setToken(t){
    this.token= t;
    localStorage.setItem('token', t);
  }

  getToken(){
    this.token = localStorage.getItem('token');
    console.log('token: ', this.token);
    return this.token;
  }

  logout(){
    localStorage.clear();
  }

  getPromos(){
    return this.http.get(this.url);
  }

  getPromo(id){
    return this.http.get(this.url + id);
  }

  addPromo(data){
    console.debug('data: ', data);
    return this.http.post(this.url+'?token='+this.token, data);
  }

  editPromo(data, id){
    console.debug('data: ', data);
    return this.http.put(this.url + id+ '?token='+this.token, data);
  }

  deletePromo(id){
    return this.http.delete(this.url +id+ '?token='+this.token);
  }

  getByCatAndName(){
    return this.http.get(this.url);
  }
}
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MadridService } from '../madrid.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }
  aux: any;

  constructor(private http: HttpClient, private madridService: MadridService) { }

  ngOnInit() {
  }
  
  login(){
    console.log("entrando a login");
    this.http.post('http://localhost:3000/login', this.user).subscribe(data => {
      console.log("data: ", data);
      this.aux = data;
      if(this.aux.success){
        this.madridService.setToken(this.aux.token);
        console.log('getting token: ', this.madridService.getToken());
      }
    });
  }

}

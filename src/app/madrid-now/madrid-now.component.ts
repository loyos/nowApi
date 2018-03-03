import { Component, OnInit } from '@angular/core';
import { MadridNowListComponent } from './../madrid-now-list/madrid-now-list.component';
import { MadridService } from '../madrid.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-madrid-now',
  templateUrl: './madrid-now.component.html',
  styleUrls: ['./madrid-now.component.css']
})
export class MadridNowComponent implements OnInit {

  constructor(private madridService: MadridService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.madridService.logout();
    this.router.navigate(['/login']);
  }

}

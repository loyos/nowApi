import { Component, OnInit } from '@angular/core';
import { MadridService } from '../madrid.service';

@Component({
  selector: 'app-madrid-now-list',
  templateUrl: './madrid-now-list.component.html',
  styleUrls: ['./madrid-now-list.component.css']
})
export class MadridNowListComponent implements OnInit {

  promos;

  constructor(private madridService: MadridService) {
   }

  ngOnInit() {
    this.madridService.getPromos().subscribe(data => {
      console.log('data: ', data);
      this.promos = data;
    });
  }

}

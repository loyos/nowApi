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
    this.getAllPromos();
  }

  getAllPromos(){
    this.madridService.getPromos().subscribe(data => {
      console.log('data: ', data);
      this.promos = data;
    });
  }

  deletePromo(id){
    var a = confirm("Seguro?");
    if(a== true){
      this.madridService.deletePromo(id).subscribe(data => {
        console.log('eliminada la promo', data);
        alert("eliminada la promo");
        this.getAllPromos();
      });
    }

  }

}

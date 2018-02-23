import { Component, OnInit } from '@angular/core';
import { MadridService } from '../madrid.service';

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.scss']
})
export class AddPromoComponent implements OnInit {

  promo = {
    name: '',
    info: '',
    day: '',
    category: '',
    promoImage: ''
    // img: ''
  };
  constructor(private madridService: MadridService) { }

  ngOnInit() {
  }

  addPromo(){
    this.madridService.addPromo(this.promo).subscribe(data =>{
      console.debug(data);
    });
  }

}

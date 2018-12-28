import { Component, OnInit } from '@angular/core';
import { MadridService } from '../madrid.service';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-edit-promo',
  templateUrl: './edit-promo.component.html',
  styleUrls: ['./edit-promo.component.scss']
})
export class EditPromoComponent implements OnInit {

  promo = {
    _id: '',
    name: '',
    info: '',
    day: '',
    category: '',
    featured: false,
    img: ''
  };

  checked = [];
  a = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

  private sub: any;
  id: String;

  constructor(private madridService: MadridService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log("this.id: ", this.id);
      this.getPromo(this.id);
   });
  }

  getPromo(id){
    this.madridService.getPromo(this.id).subscribe(data => {
      console.debug(data);
      this.sub = data;
      this.promo = this.sub;
      this.setDays(this.promo.day.split(','));
    });
  }

  setDays(days){
    console.debug("days: ", days);
    days.forEach((el,i) => {
      this.a.forEach((e, j) => {
        if(el == e){
          this.checked[j] = true;
        }else{
          this.checked[j] = this.checked[j] == true ? true : false;
        }
      });
    });
    console.debug("this.checked: ", this.checked);
  }

  editPromo() {
    this.promo.day = "";
    this.checked.forEach((data, i) => {
      if (this.checked[i]) {
        this.promo.day = this.a[i] + ',' +this.promo.day;
      }
    });

    console.log("this.promo.day: ", this.promo.day);

    this.madridService.editPromo(this.promo, this.promo._id).subscribe(data => {
      console.debug(data);
      alert('promo editada');
      // this.toastr.success('You are awesome!', 'Success!');
      window.location.replace("/madridNow");
    });
  }

}

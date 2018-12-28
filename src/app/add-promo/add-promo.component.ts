import { Component, OnInit } from '@angular/core';
import { MadridService } from '../madrid.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.scss']
})
export class AddPromoComponent implements OnInit {

  checked = [];
  a = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

  promo = {
    name: '',
    info: '',
    day: '',
    category: '',
    promoImage: '',
    featured: false,
    // img: ''
  };

  filesToUpload: Array<File> = [];

  constructor(private madridService: MadridService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    console.log('get token: ', this.madridService.getToken());
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.product.photo = fileInput.target.files[0]['name'];
  }

  addPromo() {
    this.promo.day = '';

    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    this.checked.forEach((data, i) => {
      if (this.checked[i]) {
        this.promo.day = this.a[i] + ',' +this.promo.day;
      }
    })

    console.log('this: ', this.promo.day);


    formData.append("promoImage", files[0]);
    formData.append("name", this.promo.name);
    formData.append("info", this.promo.info);
    formData.append("day", this.promo.day);
    formData.append("category", this.promo.category);
    this.madridService.addPromo(formData).subscribe(data => {
      console.debug(data);
      alert('promo agregada');
      // this.toastr.success('You are awesome!', 'Success!');
      window.location.replace("/madridNow");
    });
  }

}

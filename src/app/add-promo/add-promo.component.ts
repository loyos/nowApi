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

  filesToUpload: Array<File> = [];

  constructor(private madridService: MadridService) { }

  ngOnInit() {
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }

  addPromo() {

    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    formData.append("promoImage", files[0]);
    formData.append("name", this.promo.name);
    formData.append("info", this.promo.info);
    formData.append("day", this.promo.day);
    formData.append("category", this.promo.category);
    this.madridService.addPromo(formData).subscribe(data => {
      console.debug(data);
    });
  }

}

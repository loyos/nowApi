import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MadridService } from './madrid.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MadridNowComponent } from './madrid-now/madrid-now.component';
import { MadridNowListComponent } from './madrid-now-list/madrid-now-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {ViewContainerRef} from '@angular/core';

// angular material

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AddPromoComponent } from './add-promo/add-promo.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import { EditPromoComponent } from './edit-promo/edit-promo.component';

const appRoutes: Routes = [
  { path: 'madridNow', component: MadridNowComponent },
  { path: 'editPromo/:id', component: EditPromoComponent },
  { path: 'addPromo', component: AddPromoComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/madridNow',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MadridNowComponent,
    MadridNowListComponent,
    AddPromoComponent,
    EditPromoComponent,
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ToastModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [MadridService],
  bootstrap: [AppComponent]
})
export class AppModule { }

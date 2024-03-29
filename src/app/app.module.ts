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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/guard';
import {MatCheckboxModule} from '@angular/material/checkbox';

const appRoutes: Routes = [
  { path: 'madridNow', pathMatch: 'full', canActivate: [AuthGuard], component: MadridNowComponent },
  { path: 'editPromo/:id', component: EditPromoComponent },
  { path: 'addPromo', component: AddPromoComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
  { path: '**',
    redirectTo: '/madridNow'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    MadridNowComponent,
    MadridNowListComponent,
    AddPromoComponent,
    EditPromoComponent,
    LoginComponent,
    
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
    MatCheckboxModule
  ],
  providers: [MadridService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }

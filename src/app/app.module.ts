import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MadridService } from './madrid.service';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MadridNowComponent } from './madrid-now/madrid-now.component';
import { MadridNowListComponent } from './madrid-now-list/madrid-now-list.component';
import {MatCardModule} from '@angular/material/card';

// angular material

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const appRoutes: Routes = [
  { path: 'madridNow', component: MadridNowComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/madridNow',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MadridNowComponent,
    MadridNowListComponent,
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [MadridService],
  bootstrap: [AppComponent]
})
export class AppModule { }

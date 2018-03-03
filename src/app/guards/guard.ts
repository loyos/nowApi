import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import { MadridService } from '../madrid.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private madridService: MadridService) {

  }
  canActivate() {
    console.log('AuthGuard#canActivate called');
    if (this.madridService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Security } from '../utils/security.util';

@Injectable()
export class AuthService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    const hasToken = Security.hasToken()
    if (!hasToken) {
      this.router.navigate(['/login'])
      return false
    }

    return true
  }
}

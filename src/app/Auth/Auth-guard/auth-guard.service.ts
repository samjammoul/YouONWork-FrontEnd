import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserHandlerService} from '../../login/UserHandler/user-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: UserHandlerService, private router: Router) { }

    canActivate(): boolean {
        if (this.auth.getUserToken()){
            return true;
        } else {
            this.router.navigate(['/login']);
            return true;
        }
    }


}

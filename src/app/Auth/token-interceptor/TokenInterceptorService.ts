import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserHandlerService} from '../../login/UserHandler/user-handler.service';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    constructor(private auth: UserHandlerService) {
    }
    intercept(req: HttpRequest<any>,
              next: HttpHandler) {

        if (this.auth.getUserToken()) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + localStorage.getItem('myToken')
                }
            });
            return next.handle(req);
        } else {

            return next.handle(req);
        }

    }


}

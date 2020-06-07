import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("request.url ", request.url)
    if (request.url.includes("get-products ")) {
      const cloned = request.clone({
        url: environment.proxy + request.url
      });
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}

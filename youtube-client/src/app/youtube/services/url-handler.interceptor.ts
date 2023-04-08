import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UrlHandlerInterceptor implements HttpInterceptor {

  private readonly apiKey: string = 'AIzaSyAleKLJ-YHJvCn2smnBp-P5O-gGVImL9us'

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const link: string = request.url;
    const req: HttpRequest<any> = request.clone({url: `${link}&key=${this.apiKey}`});
    return next.handle(req);
  }
}

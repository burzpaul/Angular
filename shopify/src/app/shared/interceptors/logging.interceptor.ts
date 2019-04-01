import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    // tslint:disable-next-line: no-any
    req: HttpRequest<any>,
    next: HttpHandler
    // tslint:disable-next-line: no-any
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        // tslint:disable-next-line: no-console
        console.log('Logging interceptor', event);
      })
    );
  }
}

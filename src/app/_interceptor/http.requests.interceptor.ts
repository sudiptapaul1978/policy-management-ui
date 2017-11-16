import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {TokenGeneratorService} from '../_service/token-generator.service';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {
  constructor(private tokenGeneratorService: TokenGeneratorService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*
    const appToken = this.tokenGeneratorService.getToken();
    console.log('appToken in Local Storage > ' + JSON.stringify(appToken));
    const lastAppTokenExprires = appToken.expiresIn;
    const tokenGenerationTime = appToken.tokenGenerationTime;
    const currentTimeInSeconds = Math.round((Date.now()) / 1000);
    const timeSpendFromLastTokenGeneration = (currentTimeInSeconds - tokenGenerationTime);
    const timeRemaining = (lastAppTokenExprires - timeSpendFromLastTokenGeneration);
    console.log('lastAppTokenExprires > ' + lastAppTokenExprires);
    console.log('tokenGenerationTime > ' + tokenGenerationTime);
    console.log('currentTimeInSeconds > ' + currentTimeInSeconds);
    console.log('timeSpendFromLastTokenGeneration > ' + timeSpendFromLastTokenGeneration);
    console.log('timeRemaining > ' + timeRemaining);
    */
    /*
    if (appToken === null || appToken.accessToken === '' || timeRemaining < 5) {
      this.tokenGeneratorService.getTokenFromWSO2().subscribe( resp => {
        appToken = resp;
        this.tokenGeneratorService.setToken(appToken);
      });
    }
     */
    request = request.clone({
      setHeaders: {
        // 'Authorization' : `Bearer ${appToken.accessToken}`,
        'Content-Type': 'application/json'
      }
    });


    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log('httpReponse is good');
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log('unauthorized response');
          /*
          this.tokenGeneratorService.getTokenFromWSO2()
            .subscribe(resp => {
              console.log('got token in authservice:' + resp);
              this.tokenGeneratorService.setToken(resp);
            });
            */
        }
      }
    });
  }
}

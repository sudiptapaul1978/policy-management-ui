import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http, Response, Headers} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import {AppToken} from '../_models/app-token';

@Injectable()
export class TokenGeneratorService {

  /*
  // tokenURL = environment.tokenURL;

  constructor(private http: Http) { }
  public getToken(): AppToken {
    const appToken = <AppToken> ({
      accessToken: localStorage.getItem('token'),
      scope: localStorage.getItem('scope'),
      tokenType: localStorage.getItem('token_type'),
      expiresIn: +(localStorage.getItem('expires_in')),
      tokenGenerationTime: +(localStorage.getItem('token_generation_time'))
    });
    return appToken;
  }

  public setToken(appToken: AppToken) {
    localStorage.setItem('token', appToken.accessToken);
    localStorage.setItem('scope', appToken.scope);
    localStorage.setItem('token_type', appToken.tokenType);
    localStorage.setItem('expires_in', appToken.expiresIn + '');
    localStorage.setItem('token_generation_time', appToken.tokenGenerationTime + '');
  }

  getTokenFromWSO2(): Observable<AppToken> {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('grant_type', 'client_credentials');
    return this.http.post(`${this.tokenURL}` , urlSearchParams, { headers: this.getHeaders()})
      .map(mapTokenFromResponse);
  }

  private getHeaders() {
    const headers = new Headers();
    // headers.append('Authorization', environment.tokenAuthKey);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  } */
}
function mapTokenFromResponse(response: Response): AppToken {
  return toToken(response.json());
}
function toToken(resp: any): AppToken {
  const appToken = <AppToken> ({
    accessToken: resp.access_token,
    scope: resp.scope,
    tokenType: resp.token_type,
    expiresIn: resp.expires_in,
    tokenGenerationTime: Math.round((Date.now()) / 1000),
  });
  return appToken;
}

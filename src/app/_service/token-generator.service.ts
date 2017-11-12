import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http, Response, Headers} from '@angular/http';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class TokenGeneratorService {
  private resultToken: any = {};
  private tokenURL = environment.tokenURL;
  private tokenAuthKey = environment.tokenAuthKey;
  constructor(private http: Http) { }

  generateAppToken(): Observable<string> {
    console.log('In TokenGeneratorService.generateAppToken()');
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    console.log('Going to call token');
    this.resultToken = this.http.post(`${this.tokenURL}?grant_type=client_credentials` , params, {headers: this.getHeaders()})
      .map(mapAppTokenFromResponse);
    console.log('Return from the token call with the token value as > ' + this.resultToken.toString());
    return this.resultToken;
  }

  private getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    headers.append('Authorization', `${this.tokenAuthKey}`);
    return headers;
  }
}

function mapAppTokenFromResponse(response: Response): string {
  alert('Ok');
  return toAppToken(response.json());
}
function toAppToken(res: any): string {
  alert('res.access_token' + res.access_token);
  return res.access_token;
}

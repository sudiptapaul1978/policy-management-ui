import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../_models/user';
import {environment} from '../../environments/environment';
import { URLSearchParams } from '@angular/http';
import {LoginRequest} from '../_models/login-request';
import {TokenGeneratorService} from './token-generator.service';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';


@Injectable()
export class UserService {

  private userURL = environment.userURL;
  private authToken: string;
  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    console.log('In UserService.registerUser()');
    return this
      .http
      .post(`${this.userURL}/register`, JSON.stringify(user), {headers: this.getHeaders()})
      .map(mapUserFromResponse);
  }

  login(userName: string, password: string): Observable<User> {
    console.log('In UserService.login()');
    console.log(JSON.stringify({ userName: userName, password: password }));
    const loginRequest = new LoginRequest();
    loginRequest.userName = userName;
    loginRequest.password = password;

    return this.http.post(`${this.userURL}/login`, JSON.stringify(loginRequest), {headers: this.getHeaders()})
      .map(mapUserFromResponse);
  }

  logout() {
    console.log('new Logout Timestamp() > ' + (Date.now() / 1000));
    console.log('In UserService.logout()');
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  private getHeaders() {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    // headers.append('Content-Type', 'application/json');
    return headers;
  }
}

function mapUserFromResponse(response: HttpResponse<any>): User {
  return toUser(response);
}

function toUser(res: any): User {
  const respUser = res.status === '1' ? res.user : null;
  const user = res.status === '1'  ? <User> ({
    userName: res.user.userName,
    role: res.user.role,
    firstName: res.user.firstName,
    lastName: res.user.lastName,
    policies: res.user.policies
  }) : <User> ({
    userError: res.user.userError
  });
  return user;
}

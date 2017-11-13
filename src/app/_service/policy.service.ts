import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http, Response, Headers} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import {Policy} from '../_models/policy';
import {TokenGeneratorService} from './token-generator.service';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable()
export class PolicyService {

  private policyURL = environment.policyURL;
  private authToken: string;
  constructor(private http: HttpClient) { }

  getPolicyName(policyId: string): Observable<string> {
    console.log('In get policy with policyId > ' + policyId);
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('policyId', policyId);
    const formData = new FormData();
    formData.append('policyId', policyId);
    const test = {'policyId': policyId};

    console.log('JSON.stringify(urlSearchParams) > ' + JSON.stringify(test));
    // return this.http.post(`${this.policyURL}/getPolicy` , urlSearchParams, {headers: this.getHeaders()}).map(mapPolicyFromResponse);

    return this.http.post(`${this.policyURL}/getPolicy?policyId=${policyId}` , urlSearchParams, {headers: this.getHeaders()})
      .map(mapPolicyFromResponse);
  }
  getAllPolicies(): Observable<Policy[]> {
    console.log('In get all policies');
    // return this.http.get(`${this.policyURL}/getAllPolicies`, {headers: this.getHeaders()}).map(mapPoliciesFromResponse);
    return this.http.get(`${this.policyURL}/getAllPolicies`, {headers: this.getHeaders()})
      .map(mapPoliciesFromResponse);
  }
  updatePolicy(policy: Policy) {
    return this.http.post(`${this.policyURL}/addOrUpdate` , JSON.stringify(policy), {headers: this.getHeaders()})
      .map(mapSavePolicyResponse);
  }

  private getHeaders() {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    // headers.append('Content-Type', 'application/json');
    return headers;
  }
}

function mapPolicyFromResponse(response: HttpResponse<any>): string {
  return toPolicyName(response);
}
function toPolicyName(res: any): string {
  return res.status === '1' ? res.policy.policyName : null;
}
function mapPoliciesFromResponse(response: HttpResponse<any>): Policy[] {
  return toPolicies(response);
}
function toPolicies(res: any): Policy[] {
  return res.status === '1' ? res.policies : null;
}
function mapSavePolicyResponse(response: HttpResponse<any>): string {
  return toSaveMessage(response);
}
function toSaveMessage(res: any): string {
  return res.status === '1' ? res.message : 'Error updating policy.';
}

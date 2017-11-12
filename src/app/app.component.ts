import {Component, OnInit} from '@angular/core';
import {UserService} from './_service/user.service';
import {PolicyService} from './_service/policy.service';
import {User} from './_models/user';
import {TokenGeneratorService} from './_service/token-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, PolicyService, TokenGeneratorService]
})
export class AppComponent implements OnInit {
  currentUser: User;
  title = 'Policy Management Application';
  ngOnInit(): void {
    console.log('In AppComponent');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../_service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  returnUrl: string;
  loginError: string;
  role: string;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // reset login status
    this.userService.logout();
    this.loginError = null;
    // return url default to '/'
    this.returnUrl = '/';
  }

  login() {
    console.log('in login component login');
    this.userService.login(this.user.userName, this.user.password)
      .subscribe(r => {
        const user = r;
        console.log('User in login component here: ' + user);
        if (user && user.role) {
          localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigate(['/landing']);
        } else {
          this.loginError = user.userError;
          this.user.password = null;
        }
      });
    
  }
}

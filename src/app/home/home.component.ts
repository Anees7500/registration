import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService, User } from '../core/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user : User
  constructor(private beService : BackendService, private router: Router) { }

  ngOnInit() {
    this.user = this.beService.user
  }
  getData() {


  }
  logout() {
    this.beService.setData({ key : 'isLoggedIn' , value : false});
    this.router.navigate(['/login'])
  }

}

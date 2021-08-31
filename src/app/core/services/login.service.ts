import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private beService : BackendService) { }

  login(form : any) {
    const username = form.username;
    const password = form.password;
    if (this.beService.getData('username') === username && this.beService.getData('password') === password) {
      this.beService.setData({ key : 'isLoggedIn', value : true});
      return true;
    } else {
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { BackendService, User } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private beService : BackendService) { }
  setData (user : User) {
    this.beService.setData({ key : "firstName", value:  user.firstName});
    this.beService.setData({ key : "lastName", value:  user.lastName});
    this.beService.setData({ key : "username", value:  user.username});
    this.beService.setData({ key : "password", value:  user.password});
    this.beService.setData({ key : "phone", value:  user.phone});
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  user : User
  constructor() { }

   getData (key : string) {
    return localStorage.getItem(key);
  }
  setData(record: Record) {
    const key  = record.key;
    const value = record.value;
    localStorage.setItem(key , value);
  }
}
export interface Record {
  key : string,
  value : any
}
export interface User {
  firstName? : string
  lastName? : string
  username? : string
  password? : string
  phone?: string
}

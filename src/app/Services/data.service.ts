import { Injectable } from '@angular/core';
import { User } from '../user';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private users: User[] = [];

  constructor(private logger: LoggerService) { }

  getUsers(){
    this.logger.disp(this.users)
  }

  setUser(users: User[]){
    this.users = users;
  }
}

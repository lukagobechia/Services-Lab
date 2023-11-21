import { Injectable } from '@angular/core';
import { User } from '../user';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {


  disp(user: any) {
    console.log(user);
  }

}

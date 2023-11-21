import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users: User[] = [];
  constructor(private data: DataService){}

    ngOnInit(): void {
        this.data.getUsers();
    }
    displayData(){
      this.data.getUsers();
    }
}

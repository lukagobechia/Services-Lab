import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private data: DataService) {} // injection of Data Server

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ];
  }
  sendData(){
    this.data.setUser(this.users); // send user datat to DataService
  }
}

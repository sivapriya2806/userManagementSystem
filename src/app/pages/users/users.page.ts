import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe(
      (response) => {
        console.log('success', response);
        if (response.status == 'success') {
          this.users = response.data;
        } else {
          console.log('failed to fetch data', response.message);
        }
      },
      (error) => {
        console.log('Error fetching data', error);
      }
    );
  }
}

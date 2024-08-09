import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.page.html',
  styleUrls: ['./user-information.page.scss'],
})
export class UserInformationPage implements OnInit {
  user: any[] = [];

  constructor(private router: Router) {}

  loadUser() {
    const storedData = localStorage.getItem('userData');
    this.user = storedData ? JSON.parse(storedData) : [];
  }

  ngOnInit() {
    this.loadUser();
  }
  deleteUser(index: number) {
    if (index >= 0 && index < this.user.length) {
      this.user.splice(index, 1);
      localStorage.setItem('userData', JSON.stringify(this.user));
    }
  }
  editUser(index: number) {
    const userToEdit = this.user[index];

    localStorage.setItem('isEditable', 'true');
    localStorage.setItem('index', JSON.stringify(index));
    this.router.navigate(['/user-form']);
  }
  addNew() {
    this.router.navigate(['/user-form']);
    localStorage.setItem('isEditable', 'false');
  }
}

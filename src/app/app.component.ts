import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/landing', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'people' },
    { title: 'Form', url: '/user-form', icon: 'reader' },
    {
      title: 'User Information',
      url: '/user-information',
      icon: 'person',
    },
    { title: 'User', url: '/users', icon: 'heart-circle' },
    { title: 'Add New', url: '/user-post-method', icon: 'add-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-post-method',
  templateUrl: './user-post-method.page.html',
  styleUrls: ['./user-post-method.page.scss'],
})
export class UserPostMethodPage implements OnInit {
  showSuccessMessage = false;
  showForm = true;

  constructor(private userService: UserService) {}

  postForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
  });

  ngOnInit() {}

  onPost() {
    if (this.postForm.valid) {
      console.log('Form is valid');
      const newUser = this.postForm.value;
      this.userService.postUser(newUser).subscribe(
        (response) => {
          console.log('Success', response);
          this.showSuccessMessage = true;
          this.showForm = false;
          this.postForm.reset();
        },
        (error) => {
          console.log('Error', error);
        }
      );
    }
  }
}

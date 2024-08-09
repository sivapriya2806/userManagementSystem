import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {
  @Output() formSubmitted = new EventEmitter<any>();
  // @Output() data: EventEmitter<any> = new EventEmitter<any>();
  isEditable: any = false;
  userData: any;
  editIndex: any;
  editData: any;
  constructor(private router: Router) {}
  userForm = new FormGroup({
    firstName: new FormControl('Ryle', Validators.required),
    lastName: new FormControl('Nincha', Validators.required),
    address: new FormControl('Boston', Validators.required),
    phoneNumber: new FormControl('0718713074', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    gender: new FormControl('male', Validators.required),
  });
  ngOnInit(): void {
    // // console.log(this.data);
    const formData = this.userForm.value;

    const storedData = localStorage.getItem('userData');
    let user = storedData ? JSON.parse(storedData) : [];

    if (!Array.isArray(user)) {
      user = [];
    }
    user.push(formData);

    localStorage.setItem('userData', JSON.stringify(user));

    this.userData = localStorage.getItem('userData');
    this.userData = JSON.parse(this.userData);
    this.editIndex = localStorage.getItem('index');
    console.log('userData', this.userData[this.editIndex]);
    this.editData = this.userData[this.editIndex];
    const isEdit = localStorage.getItem('isEditable');
    this.isEditable = isEdit;
    console.log(isEdit);
    if (this.isEditable == 'true') {
      {
        this.userForm.setValue({
          firstName: this.editData.firstName,
          lastName: this.editData.lastName,
          address: this.editData.address,
          phoneNumber: this.editData.phoneNumber,
          gender: this.editData.gender,
        });
      }
    }
  }

  onSubmit() {
    // if (this.userForm.valid) {
    //   console.log(this.userForm.value);
    //   const formData = this.userForm.value;

    //   const storedData = localStorage.getItem('userData');
    //   let user = storedData ? JSON.parse(storedData) : [];

    //   if (!Array.isArray(user)) {
    //     user = [];
    //   }
    //   user.push(formData);
    //   localStorage.setItem('userData', JSON.stringify(user));
    //   this.userForm.reset();
    //   this.router.navigate(['/user-information']);
    // }

    if (this.isEditable == 'false') {
      if (this.userForm.valid) {
        console.log(this.userForm.value);
        const formData = this.userForm.value;

        const storedData = localStorage.getItem('userData');
        let user = storedData ? JSON.parse(storedData) : [];

        if (!Array.isArray(user)) {
          user = [];
        }
        user.push(formData);

        localStorage.setItem('userData', JSON.stringify(user));
        this.formSubmitted.emit(formData);
        this.userForm.reset();
        this.router.navigate(['/user-information']);
      } else {
        console.log('Form is invalid');
      }
    } else {
      console.log('edit');

      if (this.userForm.valid) {
      }
      const formData = this.userForm.value;
      console.log(formData);

      if (this.editIndex >= 0 && this.editIndex < this.userData.length) {
        this.userData.splice(this.editIndex, 1, formData);
        console.log('Updated userData:', this.userData);
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.router.navigate(['/user-information']);
      } else {
        console.error('Invalid editIndex:', this.editIndex);
      }
    }
  }
}

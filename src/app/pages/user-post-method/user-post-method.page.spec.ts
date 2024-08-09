import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPostMethodPage } from './user-post-method.page';

describe('UserPostMethodPage', () => {
  let component: UserPostMethodPage;
  let fixture: ComponentFixture<UserPostMethodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPoliciesComponent } from './user-policies.component';

describe('UserPoliciesComponent', () => {
  let component: UserPoliciesComponent;
  let fixture: ComponentFixture<UserPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

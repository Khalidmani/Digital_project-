import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountResgitstrationComponent } from './account-resgitstration.component';

describe('AccountResgitstrationComponent', () => {
  let component: AccountResgitstrationComponent;
  let fixture: ComponentFixture<AccountResgitstrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountResgitstrationComponent]
    });
    fixture = TestBed.createComponent(AccountResgitstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

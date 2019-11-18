import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidationMessageComponent } from './input-validation-message.component';

describe('InputValidationMessageComponent', () => {
  let component: InputValidationMessageComponent;
  let fixture: ComponentFixture<InputValidationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputValidationMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputValidationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

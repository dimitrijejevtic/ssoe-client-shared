import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDialogUnsavedComponent } from './notification-dialog-unsaved.component';

describe('NotificationDialogUnsavedComponent', () => {
  let component: NotificationDialogUnsavedComponent;
  let fixture: ComponentFixture<NotificationDialogUnsavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationDialogUnsavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDialogUnsavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

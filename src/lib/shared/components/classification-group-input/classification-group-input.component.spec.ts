import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationGroupInputComponent } from './classification-group-input.component';

describe('ClassificationGroupInputComponent', () => {
  let component: ClassificationGroupInputComponent;
  let fixture: ComponentFixture<ClassificationGroupInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationGroupInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationGroupInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

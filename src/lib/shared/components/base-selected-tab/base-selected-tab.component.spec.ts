import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSelectedTabComponent } from './base-selected-tab.component';

describe('BaseSelectedTabComponent', () => {
  let component: BaseSelectedTabComponent;
  let fixture: ComponentFixture<BaseSelectedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseSelectedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSelectedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsRibbonComponent } from './actions-ribbon.component';

describe('ActionsRibbonComponent', () => {
  let component: ActionsRibbonComponent;
  let fixture: ComponentFixture<ActionsRibbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsRibbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

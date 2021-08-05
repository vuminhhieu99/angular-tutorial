import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectChangeChild2Component } from './detect-change-child2.component';

describe('DetectChangeChild2Component', () => {
  let component: DetectChangeChild2Component;
  let fixture: ComponentFixture<DetectChangeChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectChangeChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectChangeChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectChangeChildChildComponent } from './detect-change-child-child.component';

describe('DetectChangeChildChildComponent', () => {
  let component: DetectChangeChildChildComponent;
  let fixture: ComponentFixture<DetectChangeChildChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectChangeChildChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectChangeChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

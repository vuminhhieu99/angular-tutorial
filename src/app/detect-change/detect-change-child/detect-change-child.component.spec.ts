import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectChangeChildComponent } from './detect-change-child.component';

describe('DetectChangeChildComponent', () => {
  let component: DetectChangeChildComponent;
  let fixture: ComponentFixture<DetectChangeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectChangeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectChangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

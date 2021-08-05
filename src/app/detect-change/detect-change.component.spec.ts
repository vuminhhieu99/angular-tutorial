import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectChangeComponent } from './detect-change.component';

describe('DetectChangeComponent', () => {
  let component: DetectChangeComponent;
  let fixture: ComponentFixture<DetectChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

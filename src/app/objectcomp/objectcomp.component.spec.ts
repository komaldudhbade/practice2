import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectcompComponent } from './objectcomp.component';

describe('ObjectcompComponent', () => {
  let component: ObjectcompComponent;
  let fixture: ComponentFixture<ObjectcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

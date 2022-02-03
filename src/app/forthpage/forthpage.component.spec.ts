import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthpageComponent } from './forthpage.component';

describe('ForthpageComponent', () => {
  let component: ForthpageComponent;
  let fixture: ComponentFixture<ForthpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

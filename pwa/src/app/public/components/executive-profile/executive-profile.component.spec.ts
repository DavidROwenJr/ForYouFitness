import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveProfileComponent } from './executive-profile.component';

describe('ExecutiveProfileComponent', () => {
  let component: ExecutiveProfileComponent;
  let fixture: ComponentFixture<ExecutiveProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiveProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

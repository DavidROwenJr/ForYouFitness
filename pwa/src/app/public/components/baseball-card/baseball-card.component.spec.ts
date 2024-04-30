import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseballCardComponent } from './baseball-card.component';

describe('BaseballCardComponent', () => {
  let component: BaseballCardComponent;
  let fixture: ComponentFixture<BaseballCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseballCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseballCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

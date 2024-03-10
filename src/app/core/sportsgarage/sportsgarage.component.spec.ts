import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsgarageComponent } from './sportsgarage.component';

describe('SportsgarageComponent', () => {
  let component: SportsgarageComponent;
  let fixture: ComponentFixture<SportsgarageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsgarageComponent]
    });
    fixture = TestBed.createComponent(SportsgarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

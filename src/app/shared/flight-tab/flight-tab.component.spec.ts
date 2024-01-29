import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTabComponent } from './flight-tab.component';

describe('FlightTabComponent', () => {
  let component: FlightTabComponent;
  let fixture: ComponentFixture<FlightTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightTabComponent]
    });
    fixture = TestBed.createComponent(FlightTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

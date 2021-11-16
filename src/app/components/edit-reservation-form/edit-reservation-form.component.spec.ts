import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReservationFormComponent } from './edit-reservation-form.component';

describe('EditReservationFormComponent', () => {
  let component: EditReservationFormComponent;
  let fixture: ComponentFixture<EditReservationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReservationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

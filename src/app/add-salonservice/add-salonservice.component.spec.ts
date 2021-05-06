import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalonserviceComponent } from './add-salonservice.component';

describe('AddSalonserviceComponent', () => {
  let component: AddSalonserviceComponent;
  let fiaxture: ComponentFixture<AddSalonserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalonserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonserviceListComponent } from './salonservice-list.component';

describe('SalonserviceListComponent', () => {
  let component: SalonserviceListComponent;
  let fixture: ComponentFixture<SalonserviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonserviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonserviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

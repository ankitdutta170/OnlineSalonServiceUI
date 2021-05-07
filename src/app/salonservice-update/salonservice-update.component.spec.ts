import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SalonserviceUpdateComponent} from './salonservice-update.component';

describe('SalonserviceUpdateComponent', () => {
  let component: SalonserviceUpdateComponent;
  let fixture: ComponentFixture<SalonserviceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonserviceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonserviceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingUpdateComponent } from './billing-update.component';

describe('BillingUpdateComponent', () => {
  let component: BillingUpdateComponent;
  let fixture: ComponentFixture<BillingUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

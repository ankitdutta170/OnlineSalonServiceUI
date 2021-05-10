import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListByDateComponent } from './show-list-by-date.component';

describe('ShowListByDateComponent', () => {
  let component: ShowListByDateComponent;
  let fixture: ComponentFixture<ShowListByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowListByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

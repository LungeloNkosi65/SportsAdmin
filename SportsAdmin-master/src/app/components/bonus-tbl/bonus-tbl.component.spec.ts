import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusTblComponent } from './bonus-tbl.component';

describe('BonusTblComponent', () => {
  let component: BonusTblComponent;
  let fixture: ComponentFixture<BonusTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

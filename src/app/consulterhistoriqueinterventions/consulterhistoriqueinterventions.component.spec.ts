import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterhistoriqueinterventionsComponent } from './consulterhistoriqueinterventions.component';

describe('ConsulterhistoriqueinterventionsComponent', () => {
  let component: ConsulterhistoriqueinterventionsComponent;
  let fixture: ComponentFixture<ConsulterhistoriqueinterventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterhistoriqueinterventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterhistoriqueinterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

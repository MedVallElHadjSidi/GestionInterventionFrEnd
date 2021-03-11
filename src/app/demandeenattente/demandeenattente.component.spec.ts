import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeenattenteComponent } from './demandeenattente.component';

describe('DemandeenattenteComponent', () => {
  let component: DemandeenattenteComponent;
  let fixture: ComponentFixture<DemandeenattenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeenattenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeenattenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

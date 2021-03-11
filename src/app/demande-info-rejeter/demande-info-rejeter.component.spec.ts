import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeInfoRejeterComponent } from './demande-info-rejeter.component';

describe('DemandeInfoRejeterComponent', () => {
  let component: DemandeInfoRejeterComponent;
  let fixture: ComponentFixture<DemandeInfoRejeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeInfoRejeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeInfoRejeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauDemandeComponent } from './nouveau-demande.component';

describe('NouveauDemandeComponent', () => {
  let component: NouveauDemandeComponent;
  let fixture: ComponentFixture<NouveauDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterNouveauDemandeComponent } from './consulter-nouveau-demande.component';

describe('ConsulterNouveauDemandeComponent', () => {
  let component: ConsulterNouveauDemandeComponent;
  let fixture: ComponentFixture<ConsulterNouveauDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterNouveauDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterNouveauDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

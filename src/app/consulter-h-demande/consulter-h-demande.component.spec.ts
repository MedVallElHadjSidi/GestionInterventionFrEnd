import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterHDemandeComponent } from './consulter-h-demande.component';

describe('ConsulterHDemandeComponent', () => {
  let component: ConsulterHDemandeComponent;
  let fixture: ComponentFixture<ConsulterHDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterHDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterHDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

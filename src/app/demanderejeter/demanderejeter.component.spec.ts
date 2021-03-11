import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderejeterComponent } from './demanderejeter.component';

describe('DemanderejeterComponent', () => {
  let component: DemanderejeterComponent;
  let fixture: ComponentFixture<DemanderejeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderejeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderejeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

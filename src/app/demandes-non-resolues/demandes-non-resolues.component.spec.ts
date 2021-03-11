import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesNonResoluesComponent } from './demandes-non-resolues.component';

describe('DemandesNonResoluesComponent', () => {
  let component: DemandesNonResoluesComponent;
  let fixture: ComponentFixture<DemandesNonResoluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesNonResoluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesNonResoluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeResoluComponent } from './demande-resolu.component';

describe('DemandeResoluComponent', () => {
  let component: DemandeResoluComponent;
  let fixture: ComponentFixture<DemandeResoluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeResoluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeResoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

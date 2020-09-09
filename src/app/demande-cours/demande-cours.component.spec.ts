import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCoursComponent } from './demande-cours.component';

describe('DemandeCoursComponent', () => {
  let component: DemandeCoursComponent;
  let fixture: ComponentFixture<DemandeCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

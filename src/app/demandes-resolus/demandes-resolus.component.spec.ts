import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesResolusComponent } from './demandes-resolus.component';

describe('DemandesResolusComponent', () => {
  let component: DemandesResolusComponent;
  let fixture: ComponentFixture<DemandesResolusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesResolusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesResolusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

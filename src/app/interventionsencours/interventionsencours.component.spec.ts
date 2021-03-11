import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionsencoursComponent } from './interventionsencours.component';

describe('InterventionsencoursComponent', () => {
  let component: InterventionsencoursComponent;
  let fixture: ComponentFixture<InterventionsencoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionsencoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionsencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervenantconsulternewmissionComponent } from './intervenantconsulternewmission.component';

describe('IntervenantconsulternewmissionComponent', () => {
  let component: IntervenantconsulternewmissionComponent;
  let fixture: ComponentFixture<IntervenantconsulternewmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervenantconsulternewmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervenantconsulternewmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

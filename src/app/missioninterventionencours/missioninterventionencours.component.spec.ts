import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissioninterventionencoursComponent } from './missioninterventionencours.component';

describe('MissioninterventionencoursComponent', () => {
  let component: MissioninterventionencoursComponent;
  let fixture: ComponentFixture<MissioninterventionencoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissioninterventionencoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissioninterventionencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

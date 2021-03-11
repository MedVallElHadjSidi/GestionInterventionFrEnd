import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissioninterventionhistoriqueComponent } from './missioninterventionhistorique.component';

describe('MissioninterventionhistoriqueComponent', () => {
  let component: MissioninterventionhistoriqueComponent;
  let fixture: ComponentFixture<MissioninterventionhistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissioninterventionhistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissioninterventionhistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

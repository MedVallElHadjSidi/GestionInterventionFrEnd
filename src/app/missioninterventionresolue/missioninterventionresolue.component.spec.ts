import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissioninterventionresolueComponent } from './missioninterventionresolue.component';

describe('MissioninterventionresolueComponent', () => {
  let component: MissioninterventionresolueComponent;
  let fixture: ComponentFixture<MissioninterventionresolueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissioninterventionresolueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissioninterventionresolueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

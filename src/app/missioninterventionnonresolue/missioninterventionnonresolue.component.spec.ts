import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissioninterventionnonresolueComponent } from './missioninterventionnonresolue.component';

describe('MissioninterventionnonresolueComponent', () => {
  let component: MissioninterventionnonresolueComponent;
  let fixture: ComponentFixture<MissioninterventionnonresolueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissioninterventionnonresolueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissioninterventionnonresolueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterHistoriquesUsersComponent } from './consulter-historiques-users.component';

describe('ConsulterHistoriquesUsersComponent', () => {
  let component: ConsulterHistoriquesUsersComponent;
  let fixture: ComponentFixture<ConsulterHistoriquesUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterHistoriquesUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterHistoriquesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

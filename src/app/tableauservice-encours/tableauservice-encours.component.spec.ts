import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauserviceEncoursComponent } from './tableauservice-encours.component';

describe('TableauserviceEncoursComponent', () => {
  let component: TableauserviceEncoursComponent;
  let fixture: ComponentFixture<TableauserviceEncoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauserviceEncoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauserviceEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

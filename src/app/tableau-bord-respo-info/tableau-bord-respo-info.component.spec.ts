import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBordRespoInfoComponent } from './tableau-bord-respo-info.component';

describe('TableauBordRespoInfoComponent', () => {
  let component: TableauBordRespoInfoComponent;
  let fixture: ComponentFixture<TableauBordRespoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauBordRespoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauBordRespoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

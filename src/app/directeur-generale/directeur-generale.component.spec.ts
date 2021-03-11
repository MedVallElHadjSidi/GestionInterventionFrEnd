import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecteurGeneraleComponent } from './directeur-generale.component';

describe('DirecteurGeneraleComponent', () => {
  let component: DirecteurGeneraleComponent;
  let fixture: ComponentFixture<DirecteurGeneraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirecteurGeneraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecteurGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

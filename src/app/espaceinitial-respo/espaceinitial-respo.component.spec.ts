import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceinitialRespoComponent } from './espaceinitial-respo.component';

describe('EspaceinitialRespoComponent', () => {
  let component: EspaceinitialRespoComponent;
  let fixture: ComponentFixture<EspaceinitialRespoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceinitialRespoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceinitialRespoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

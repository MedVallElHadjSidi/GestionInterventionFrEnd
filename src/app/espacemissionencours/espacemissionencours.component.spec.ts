import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacemissionencoursComponent } from './espacemissionencours.component';

describe('EspacemissionencoursComponent', () => {
  let component: EspacemissionencoursComponent;
  let fixture: ComponentFixture<EspacemissionencoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacemissionencoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacemissionencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

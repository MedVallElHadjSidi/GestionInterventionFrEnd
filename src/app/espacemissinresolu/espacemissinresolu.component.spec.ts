import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacemissinresoluComponent } from './espacemissinresolu.component';

describe('EspacemissinresoluComponent', () => {
  let component: EspacemissinresoluComponent;
  let fixture: ComponentFixture<EspacemissinresoluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacemissinresoluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacemissinresoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

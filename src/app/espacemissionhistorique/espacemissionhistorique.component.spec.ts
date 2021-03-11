import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacemissionhistoriqueComponent } from './espacemissionhistorique.component';

describe('EspacemissionhistoriqueComponent', () => {
  let component: EspacemissionhistoriqueComponent;
  let fixture: ComponentFixture<EspacemissionhistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacemissionhistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacemissionhistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

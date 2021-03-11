import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacemissionnonresolueComponent } from './espacemissionnonresolue.component';

describe('EspacemissionnonresolueComponent', () => {
  let component: EspacemissionnonresolueComponent;
  let fixture: ComponentFixture<EspacemissionnonresolueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacemissionnonresolueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacemissionnonresolueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

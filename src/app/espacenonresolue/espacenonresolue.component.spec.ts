import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacenonresolueComponent } from './espacenonresolue.component';

describe('EspacenonresolueComponent', () => {
  let component: EspacenonresolueComponent;
  let fixture: ComponentFixture<EspacenonresolueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacenonresolueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacenonresolueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

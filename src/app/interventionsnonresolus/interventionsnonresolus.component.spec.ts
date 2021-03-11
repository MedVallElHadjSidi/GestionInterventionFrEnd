import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionsnonresolusComponent } from './interventionsnonresolus.component';

describe('InterventionsnonresolusComponent', () => {
  let component: InterventionsnonresolusComponent;
  let fixture: ComponentFixture<InterventionsnonresolusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionsnonresolusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionsnonresolusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

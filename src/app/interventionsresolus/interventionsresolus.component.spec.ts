import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionsresolusComponent } from './interventionsresolus.component';

describe('InterventionsresolusComponent', () => {
  let component: InterventionsresolusComponent;
  let fixture: ComponentFixture<InterventionsresolusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionsresolusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionsresolusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacerespoconsulterComponent } from './espacerespoconsulter.component';

describe('EspacerespoconsulterComponent', () => {
  let component: EspacerespoconsulterComponent;
  let fixture: ComponentFixture<EspacerespoconsulterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacerespoconsulterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacerespoconsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

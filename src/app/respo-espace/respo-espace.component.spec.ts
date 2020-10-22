import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespoEspaceComponent } from './respo-espace.component';

describe('RespoEspaceComponent', () => {
  let component: RespoEspaceComponent;
  let fixture: ComponentFixture<RespoEspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespoEspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespoEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

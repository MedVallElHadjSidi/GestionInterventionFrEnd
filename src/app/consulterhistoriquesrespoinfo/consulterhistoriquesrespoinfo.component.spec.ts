import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterhistoriquesrespoinfoComponent } from './consulterhistoriquesrespoinfo.component';

describe('ConsulterhistoriquesrespoinfoComponent', () => {
  let component: ConsulterhistoriquesrespoinfoComponent;
  let fixture: ComponentFixture<ConsulterhistoriquesrespoinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterhistoriquesrespoinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterhistoriquesrespoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

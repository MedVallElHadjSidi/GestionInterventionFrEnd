import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIntervenantComponent } from './page-intervenant.component';

describe('PageIntervenantComponent', () => {
  let component: PageIntervenantComponent;
  let fixture: ComponentFixture<PageIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

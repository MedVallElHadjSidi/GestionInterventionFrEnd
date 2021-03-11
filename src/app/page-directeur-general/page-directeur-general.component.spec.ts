import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDirecteurGeneralComponent } from './page-directeur-general.component';

describe('PageDirecteurGeneralComponent', () => {
  let component: PageDirecteurGeneralComponent;
  let fixture: ComponentFixture<PageDirecteurGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDirecteurGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDirecteurGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRespoInfoComponent } from './page-respo-info.component';

describe('PageRespoInfoComponent', () => {
  let component: PageRespoInfoComponent;
  let fixture: ComponentFixture<PageRespoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRespoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRespoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

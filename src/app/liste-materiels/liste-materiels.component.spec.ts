import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMaterielsComponent } from './liste-materiels.component';

describe('ListeMaterielsComponent', () => {
  let component: ListeMaterielsComponent;
  let fixture: ComponentFixture<ListeMaterielsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMaterielsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMaterielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

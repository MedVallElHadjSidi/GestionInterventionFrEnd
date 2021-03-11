import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceuserCommentComponent } from './espaceuser-comment.component';

describe('EspaceuserCommentComponent', () => {
  let component: EspaceuserCommentComponent;
  let fixture: ComponentFixture<EspaceuserCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceuserCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceuserCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacechatresolueComponent } from './espacechatresolue.component';

describe('EspacechatresolueComponent', () => {
  let component: EspacechatresolueComponent;
  let fixture: ComponentFixture<EspacechatresolueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacechatresolueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacechatresolueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

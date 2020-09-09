import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterWebSocketComponent } from './tester-web-socket.component';

describe('TesterWebSocketComponent', () => {
  let component: TesterWebSocketComponent;
  let fixture: ComponentFixture<TesterWebSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterWebSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterWebSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

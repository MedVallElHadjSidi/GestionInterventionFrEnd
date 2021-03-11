import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDemandeUserComponent } from './edit-demande-user.component';

describe('EditDemandeUserComponent', () => {
  let component: EditDemandeUserComponent;
  let fixture: ComponentFixture<EditDemandeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDemandeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDemandeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

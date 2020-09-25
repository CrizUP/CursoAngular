import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosAdminContainer } from './autos-admin.container';

describe('AutosAdminComponent', () => {
  let component: AutosAdminContainer;
  let fixture: ComponentFixture<AutosAdminContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutosAdminContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosAdminContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

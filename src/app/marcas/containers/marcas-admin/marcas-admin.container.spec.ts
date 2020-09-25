import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasAdminContainer } from './marcas-admin.container';

describe('MarcasAdminComponent', () => {
  let component: MarcasAdminContainer;
  let fixture: ComponentFixture<MarcasAdminContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasAdminContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasAdminContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

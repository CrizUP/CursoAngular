import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAutoContainer } from './registrar-auto.container';

describe('RegistrarAutoComponent', () => {
  let component: RegistrarAutoContainer;
  let fixture: ComponentFixture<RegistrarAutoContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAutoContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAutoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

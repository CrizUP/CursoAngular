import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasContainer } from './marcas.container';

describe('MarcasComponent', () => {
  let component: MarcasContainer;
  let fixture: ComponentFixture<MarcasContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

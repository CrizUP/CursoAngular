import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosContainer } from './autos.container';

describe('AutosComponent', () => {
  let component: AutosContainer;
  let fixture: ComponentFixture<AutosContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutosContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

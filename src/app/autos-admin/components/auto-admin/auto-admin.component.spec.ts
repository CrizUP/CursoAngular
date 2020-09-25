import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAdminComponent } from './auto-admin.component';

describe('AutoAdminComponent', () => {
  let component: AutoAdminComponent;
  let fixture: ComponentFixture<AutoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

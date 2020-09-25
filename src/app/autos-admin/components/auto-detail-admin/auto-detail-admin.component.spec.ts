import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDetailAdminComponent } from './auto-detail-admin.component';

describe('AutoDetailAdminComponent', () => {
  let component: AutoDetailAdminComponent;
  let fixture: ComponentFixture<AutoDetailAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoDetailAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

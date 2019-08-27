import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableJsComponent } from './ngx-table-js.component';

describe('NgxTableJsComponent', () => {
  let component: NgxTableJsComponent;
  let fixture: ComponentFixture<NgxTableJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

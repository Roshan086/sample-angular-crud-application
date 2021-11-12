import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDepartmenteComponent } from './view-departmente.component';

describe('ViewDepartmenteComponent', () => {
  let component: ViewDepartmenteComponent;
  let fixture: ComponentFixture<ViewDepartmenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDepartmenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDepartmenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

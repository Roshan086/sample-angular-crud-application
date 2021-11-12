import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmenteComponent } from './add-departmente.component';

describe('AddDepartmenteComponent', () => {
  let component: AddDepartmenteComponent;
  let fixture: ComponentFixture<AddDepartmenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepartmenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepartmenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

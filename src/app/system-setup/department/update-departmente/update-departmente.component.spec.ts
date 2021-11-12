import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepartmenteComponent } from './update-departmente.component';

describe('UpdateDepartmenteComponent', () => {
  let component: UpdateDepartmenteComponent;
  let fixture: ComponentFixture<UpdateDepartmenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDepartmenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDepartmenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

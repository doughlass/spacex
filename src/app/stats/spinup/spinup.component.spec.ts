import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinupComponent } from './spinup.component';

describe('SpinupComponent', () => {
  let component: SpinupComponent;
  let fixture: ComponentFixture<SpinupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

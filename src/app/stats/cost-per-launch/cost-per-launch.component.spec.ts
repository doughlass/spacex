import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostPerLaunchComponent } from './cost-per-launch.component';

describe('CostPerLaunchComponent', () => {
  let component: CostPerLaunchComponent;
  let fixture: ComponentFixture<CostPerLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostPerLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostPerLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

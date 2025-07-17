import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStatsComponent } from './health-stats.component';

describe('HealthStatsComponent', () => {
  let component: HealthStatsComponent;
  let fixture: ComponentFixture<HealthStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthStatsComponent]
    });
    fixture = TestBed.createComponent(HealthStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

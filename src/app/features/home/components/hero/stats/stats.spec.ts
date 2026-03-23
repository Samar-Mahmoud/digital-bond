import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stats } from './stats';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Stats', () => {
  let component: Stats;
  let fixture: ComponentFixture<Stats>;
  let mockObserverInstance: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stats],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    mockObserverInstance = {
      observe: jasmine.createSpy('observe'),
      disconnect: jasmine.createSpy('disconnect'),
    };
    (window as any).IntersectionObserver = jasmine
      .createSpy('IntersectionObserver')
      .and.returnValue(mockObserverInstance);

    fixture = TestBed.createComponent(Stats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

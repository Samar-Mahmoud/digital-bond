import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar } from './navbar';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;
  let mockObserverInstance: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    mockObserverInstance = {
      observe: jasmine.createSpy('observe'),
      disconnect: jasmine.createSpy('disconnect'),
    };
    (window as any).IntersectionObserver = jasmine
      .createSpy('IntersectionObserver')
      .and.returnValue(mockObserverInstance);

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

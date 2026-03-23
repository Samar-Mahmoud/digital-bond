import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCard } from './service-card';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ServiceCard', () => {
  let component: ServiceCard;
  let fixture: ComponentFixture<ServiceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCard],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Title');
    fixture.componentRef.setInput('features', ['feature 1']);
    fixture.componentRef.setInput('description', 'description');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

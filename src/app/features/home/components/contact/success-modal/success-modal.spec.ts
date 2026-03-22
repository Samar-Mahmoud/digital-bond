import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModal } from './success-modal';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SuccessModal', () => {
  let component: SuccessModal;
  let fixture: ComponentFixture<SuccessModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessModal],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

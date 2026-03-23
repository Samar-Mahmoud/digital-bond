import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeader } from './section-header';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SectionHeader', () => {
  let component: SectionHeader;
  let fixture: ComponentFixture<SectionHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeader],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionHeader);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('badge', 'badge');
    fixture.componentRef.setInput('title', ['part1', 'part2']);
    fixture.componentRef.setInput('description', 'description');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

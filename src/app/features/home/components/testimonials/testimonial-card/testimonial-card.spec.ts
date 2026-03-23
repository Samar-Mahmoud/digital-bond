import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestimonialCard } from './testimonial-card';
import { provideZonelessChangeDetection } from '@angular/core';

describe('TestimonialCard', () => {
  let component: TestimonialCard;
  let fixture: ComponentFixture<TestimonialCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialCard],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', 'name');
    fixture.componentRef.setInput('position', 'position');
    fixture.componentRef.setInput('feedback', 'feedback');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

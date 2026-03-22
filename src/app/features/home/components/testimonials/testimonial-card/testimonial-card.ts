import { Component, input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.html',
})
export class TestimonialCard {
  name = input.required<string>();
  position = input.required<string>();
  feedback = input.required<string>();
}

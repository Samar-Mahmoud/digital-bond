import { Component, input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.html',
})
export class TestimonialCard {
  name = input<string>();
  position = input<string>();
  feedback = input<string>();
}

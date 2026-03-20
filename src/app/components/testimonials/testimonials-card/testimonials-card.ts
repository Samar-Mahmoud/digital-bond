import { Component, input } from '@angular/core';

@Component({
  selector: 'app-testimonials-card',
  imports: [],
  templateUrl: './testimonials-card.html',
})
export class TestimonialsCard {
  name = input<string>();
  position = input<string>();
  feedback = input<string>();
}

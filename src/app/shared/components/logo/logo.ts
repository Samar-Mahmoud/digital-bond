import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [NgOptimizedImage],
  templateUrl: './logo.html',
})
export class Logo {
  showDescription = input(true, { transform: booleanAttribute });
}

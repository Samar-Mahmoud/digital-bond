import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  templateUrl: './section-header.html',
})
export class SectionHeader {
  badge = input<string>();
  title = input(['', '']);
  description = input<string>();
}

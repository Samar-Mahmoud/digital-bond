import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  templateUrl: './section-header.html',
})
export class SectionHeader {
  badge = input.required<string>();
  title = input.required<[string, string]>();
  description = input.required<string>();
}

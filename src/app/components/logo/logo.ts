import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
})
export class Logo {
  showDescription = input(true, { transform: booleanAttribute });
}

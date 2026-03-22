import { Component } from '@angular/core';
import { Logo } from '../../shared/components/logo/logo';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [Logo, SocialLinks],
  templateUrl: './footer.html',
})
export class Footer {}

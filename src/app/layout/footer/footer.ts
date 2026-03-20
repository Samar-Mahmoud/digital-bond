import { Component } from '@angular/core';
import { Logo } from '../../components/common/logo/logo';
import { SocialLinks } from '../../components/common/social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [Logo, SocialLinks],
  templateUrl: './footer.html',
})
export class Footer {}

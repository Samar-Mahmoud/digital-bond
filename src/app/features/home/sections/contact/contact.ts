import { Component } from '@angular/core';
import { SectionHeader } from '../../../../shared/components/section-header/section-header';
import { WhyChooseUs } from '../../components/contact/why-choose-us/why-choose-us';
import { ContactForm } from '../../components/contact/contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [SectionHeader, WhyChooseUs, ContactForm],
  templateUrl: './contact.html',
})
export class Contact {
  readonly badge = "Let's Start Your Journey";
  readonly title = ['Ready to', 'Transform?'];
  readonly description =
    'Take the first step towards digital excellence. Our experts are ready to turn your vision into reality.';
}

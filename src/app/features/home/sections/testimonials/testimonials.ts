import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { SectionHeader } from '../../../../shared/components/section-header/section-header';
import { TestimonialCard } from '../../components/testimonials/testimonial-card/testimonial-card';
import { Testimonial } from '../../../../shared/models/testimonial.model';
import { isPlatformBrowser } from '@angular/common';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-testimonials',
  imports: [SectionHeader, TestimonialCard],
  templateUrl: './testimonials.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials {
  readonly badge = 'Client Testimonials';
  readonly title: [string, string] = ['What Our', 'Clients Say'];
  readonly description =
    "Don't just take our word for it. Here's what our clients have to say about working with us.";

  readonly testimonials: Testimonial[] = [
    {
      name: 'Mohamed',
      position: 'Marketing Manager',
      feedback:
        'Wonderful agency to work with. Always working towards the delivery of projects. Very technical and knowledgeable in the Marketing.',
    },
    {
      name: 'Menna',
      position: 'Sales Director',
      feedback:
        'Very detailed and knowledgeable, they have managed to reduce my cost per click from FB and google by 100% compared to my old agency.',
    },
    {
      name: 'Asma',
      position: 'CTO',
      feedback: 'Competent, professional and engaged team on managerial and individual levels.',
    },
    {
      name: 'Mostafa',
      position: 'Business Owner',
      feedback:
        'A fantastic agency that develops strategic creative and technology to deliver on our business objectives.',
    },
    {
      name: 'Nada',
      position: 'Marketing Team Lead',
      feedback:
        ' We have a growing relationship with Digital Bond and they continually bring more ideas and resources to our company.',
    },
  ];

  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    import('swiper/element/bundle').then(() => {
      register();
    });
  }
}

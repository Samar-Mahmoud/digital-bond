import { Component } from '@angular/core';
import { SectionHeader } from '../../components/section-header/section-header';
import { ServiceCard } from '../../components/service-card/service-card';

@Component({
  selector: 'app-services',
  imports: [SectionHeader, ServiceCard],
  templateUrl: './services.html',
})
export class Services {
  readonly badge = 'Our Services';
  readonly title = ['Comprehensive', 'Digital Solutions'];
  readonly description =
    'From concept to deployment, we provide end-to-end digital services that transform your business and engage your customers.';

  readonly services = [
    {
      title: 'Social Media Management',
      description:
        'Comprehensive social media strategy and management to boost your online presence.',
      features: ['Content Creation', 'Community Engagement', 'Analytics'],
      icon: {
        path: 'M428.2 380.7L231.7 478.5c-2.3 1-4.8 1.5-7.3 1.5s-5-.5-7.3-1.5L20.5 380.7c-4-2-4-5.3 0-7.3L67.6 350c2.3-1 4.8-1.5 7.3-1.5s5 .5 7.3 1.5l134.8 67c2.3 1 4.8 1.5 7.3 1.5s5-.5 7.3-1.5l134.8-67c2.3-1 4.8-1.5 7.3-1.5s5 .5 7.3 1.5l47.1 23.4c4 2 4 5.2 0 7.2zm0-136.5l-47.1-23.4c-2.3-1-4.8-1.5-7.3-1.5s-5 .5-7.3 1.5L231.7 287.8c-2.3 1-4.8 1.5-7.3 1.5s-5-.5-7.3-1.5L82.3 220.7c-2.3-1-4.8-1.5-7.3-1.5s-5 .5-7.3 1.5L20.5 244.1c-4 2-4 5.3 0 7.3l196.5 97.8c2.3 1 4.8 1.5 7.3 1.5s5-.5 7.3-1.5l196.5-97.8c4-2 4-5.3 0-7.3zM20.5 130.4L217 220.7c4.7 1.9 10 1.9 14.7 0l196.5-90.3c4-1.9 4-4.9 0-6.7L231.7 33.4c-4.7-1.9-10-1.9-14.7 0L20.5 123.7c-4 1.8-4 4.9 0 6.7z',
        viewBox: '0 0 448 512',
      },
    },
    {
      title: 'Web Development',
      description: 'Custom website design and development to create a powerful online presence.',
      features: ['Responsive Design', 'E-commerce Solutions', 'SEO Optimization'],
      icon: {
        path: 'M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z',
        viewBox: '0 0 576 512',
      },
    },
    {
      title: 'Mobile Applications',
      description: 'Innovative mobile app development to connect with customers on the go.',
      features: ['iOS & Android', 'User-Centric Design', 'Performance Optimization'],
      icon: {
        path: 'M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zM192 464c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z',
        viewBox: '0 0 384 512',
      },
    },
    {
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies to improve your search engine rankings.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building'],
      icon: {
        path: 'M448 449L301.2 300.2c20-27.9 31.9-62.2 31.9-99.2 0-93.1-74.7-168.9-166.5-168.9-91.9-.1-166.6 75.7-166.6 168.8S74.7 369.8 166.5 369.8c39.8 0 76.3-14.2 105-37.9L417.5 480 448 449zM166.5 330.8c-70.6 0-128.1-58.3-128.1-129.9S95.9 71 166.5 71 294.6 129.3 294.6 200.9 237.2 330.8 166.5 330.8z',
        viewBox: '0 0 448 512',
      },
    },
    {
      title: 'Influencer Marketing',
      description: 'Partner with influencers to amplify your brand and reach new audiences.',
      features: ['Influencer Identification', 'Campaign Management', 'Performance Tracking'],
      icon: {
        path: 'M0 176L0 288C0 411.7 100.3 512 224 512S448 411.7 448 288l0-112-128 0 0 112c0 53-43 96-96 96s-96-43-96-96l0-112-128 0zm0-48l128 0 0-64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64l0 64zm320 0l128 0 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64z',
        viewBox: '0 0 448 512',
      },
    },
    {
      title: 'SMS Campaigns',
      description: 'Engage customers directly with targeted SMS marketing campaigns.',
      features: ['Audience Segmentation', 'Personalized Messaging', 'Campaign Analytics'],
      icon: {
        path: 'M0 352L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120 0c-5.2 0-10.2 1.7-14.4 4.8L166.4 539.2c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24l0-72-32 0c-53 0-96-43-96-96z',
        viewBox: '0 0 512 512',
      },
    },
    {
      title: 'Media Production',
      description: 'High-quality media production to create compelling content for your brand.',
      features: ['Video Production', 'Graphic Design', 'Copywriting'],
      icon: {
        path: 'M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z',
        viewBox: '0 0 576 512',
      },
    },
  ];
}

import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Services } from '../../sections/services/services';
import { Testimonials } from '../../sections/testimonials/testimonials';
import { Contact } from '../../sections/contact/contact';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Hero, Services, Testimonials, Contact],
  templateUrl: './home.html',
})
export class Home {}

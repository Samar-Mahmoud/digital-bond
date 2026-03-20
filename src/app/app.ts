import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { Services } from './sections/services/services';
import { Testimonials } from './sections/testimonials/testimonials';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, Services, Testimonials],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

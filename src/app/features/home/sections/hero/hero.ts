import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Stats } from '../../components/hero/stats/stats';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Stats],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

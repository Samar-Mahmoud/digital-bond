import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Stats } from '../../components/stats/stats';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Stats],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}

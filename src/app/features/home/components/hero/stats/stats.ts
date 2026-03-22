import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
})
export class Stats {
  hasAnimated = false;
  stats = [
    { label: 'Creative Ideas', value: 999 },
    { label: 'Pending Projects', value: 55 },
    { label: 'Satisfied Clients', value: 95 },
    { label: 'Success Partners', value: 10 },
  ];
  animatedValues = this.stats.map(() => signal(0));

  private platformId = inject(PLATFORM_ID);

  observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    requestAnimationFrame(() => {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.startAnimation();
            this.hasAnimated = true;
          }
        },
        { threshold: 0.2 },
      );

      this.observer.observe(document.querySelector('#stats')!);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  startAnimation() {
    this.stats.forEach((stat, index) => {
      const duration = 2000;
      const start = 0;
      const end = stat.value;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const rawProgress = (currentTime - startTime) / duration;
        const progress = Math.min(Math.max(rawProgress, 0), 1);

        const value = Math.floor(progress * (end - start) + start);
        this.animatedValues[index].set(value);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }
}

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Logo } from '../../components/common/logo/logo';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, Logo],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  activeSection = signal('hero');

  private platformId = inject(PLATFORM_ID);

  sections: Element[] = [];
  observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.sections = [...document.querySelectorAll('section[id]')];
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 10);
    this.sections.forEach((section) => this.observer?.observe(section));
  }
}

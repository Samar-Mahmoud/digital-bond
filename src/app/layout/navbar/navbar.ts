import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Logo } from '../../components/logo/logo';

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

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // section is considered active when 60% visible
      },
    );

    sections.forEach((section) => observer.observe(section));
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 10);
  }
}

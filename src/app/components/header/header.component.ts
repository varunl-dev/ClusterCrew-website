import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

/**
 * Header Component
 */
export class HeaderComponent {
  @Input() showButton: boolean = true;
  isDropdownOpen = false;
  constructor(private router: Router) {}

  /**
   * Fn to navigate to homepage
   */
  openHomepage(): void {
    this.router.navigate(['/home']);
  }

  /**
   * Fn to navigate to About Us page
   */
  openAboutUs(): void {
    this.router.navigate(['/about-us']);
  }

  /**
   * Fn to toggle the isDropdownOpen flag
   */
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /**
   * Fn to navigate to CC's Instagram page
   */
  openInstagram(): void {
    window.open(
      'https://www.instagram.com/clusters_crew_?igsh=MWgyZTVhZDQ2eGI2bQ==',
      '_blank'
    );
  }

  /**
   * Fn to navigate to Cricheroes profile
   */
  openCricHeroes(): void {
    window.open(
      'https://cricheroes.com/team-profile/3019446/CLUSTERS-CREW/members',
      '_blank'
    );
  }
}

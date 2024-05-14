import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() showButton: boolean = true;
  isDropdownOpen = false;
  constructor(private router: Router) {}

  openHomepage(): void {
    this.router.navigate(['/home']);
  }

  openAboutUs(): void {
    this.router.navigate(['/about-us']);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  openInstagram(): void {
    window.open(
      'https://www.instagram.com/clusters_crew_?igsh=MWgyZTVhZDQ2eGI2bQ==',
      '_blank'
    );
  }
}

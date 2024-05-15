import { Component } from '@angular/core';

@Component({
  selector: 'app-cc-footer',
  templateUrl: './cc-footer.component.html',
  styleUrl: './cc-footer.component.scss',
})

/**
 * Footer component
 */
export class CCFooterComponent {

  /**
   * Fn to navigate to CC's insta page
   */
  openInstagram(): void {
    window.open(
      'https://www.instagram.com/clusters_crew_?igsh=MWgyZTVhZDQ2eGI2bQ==',
      '_blank'
    );
  }

  /**
   * Fn to navigate to CC's cricheroes profile
   */
  openCricHeroes(): void {
    window.open(
      'https://cricheroes.com/team-profile/3019446/CLUSTERS-CREW/members',
      '_blank'
    );
  }
}

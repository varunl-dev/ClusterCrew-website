import { Component } from '@angular/core';
import { CatImageService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-categories',
  templateUrl: './trip-categories.component.html',
  styleUrl: './trip-categories.component.scss',
})

/**
 * Component to show CC's trips
 */
export class TripCategoriesComponent {
  categories: any[] = [
    {
      name: 'Kodaikanal',
      image: 'assets/cat-images/1.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: 'Munnar',
      image: 'assets/cat-images/2.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: "Gowtham Bachelor's party",
      image: 'assets/cat-images/3.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: "Karthy Bachelor's party",
      image: 'assets/cat-images/4.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: 'Velliangiri 2023',
      image: 'assets/cat-images/5.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: 'Velliagiri 2024',
      image: 'assets/cat-images/1.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: "Funny Bachelor's party",
      image: 'assets/cat-images/2.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: "Sakthi Bachelor's party",
      image: 'assets/cat-images/3.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: "Boomer Bachelor's party",
      image: 'assets/cat-images/4.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: "Gnanajeyam Bachelor's party",
      image: 'assets/cat-images/5.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: "Sajeeth Bachelor's party",
      image: 'assets/cat-images/1.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: 'Kholli hills',
      image: 'assets/cat-images/2.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
    {
      name: 'Clusters crew cricket',
      image: 'assets/cat-images/3.jpg',
      tripImages: [
        'assets/cat-images/1.jpg',
        'assets/cat-images/2.jpg',
        'assets/cat-images/3.jpg',
        'assets/cat-images/4.jpg',
        'assets/cat-images/5.jpg',
      ],
    },
  ];

  rows: any[] = [];

  constructor(
    private catImageService: CatImageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.calculateRows();
  }

  /**
   * Fn to segregate each row have 5 trips
   */
  calculateRows() {
    for (let i = 0; i < this.categories.length; i += 5) {
      this.rows.push(this.categories.slice(i, i + 5));
    }
  }

  /**
   * Fn to set the selected category images in service,
   * To navigate to image-gallery component
   */
  selectCategoryImages(images: string[]): void {
    this.catImageService.setSelectedCategoryImages(images);
    this.router.navigate(['/image-gallery']);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  images = [
    'assets/banners/1.jpg',
    'assets/banners/3.jpg',
    'assets/banners/4.jpg',
    'assets/banners/5.jpg',
  ];
  currentIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // Change slide every 5 seconds
  }

  setActiveIndex(index: number) {
    this.currentIndex = index;
  }

  // prevBanner() {
  //   this.currentIndex =
  //     (this.currentIndex - 1 + this.images.length) % this.images.length;
  // }

  // nextBanner() {
  //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
  // }
}

import { Component } from '@angular/core';
import { CatImageService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
})

/**
 * component to view the uploaded images
 */
export class ImageGalleryComponent {
  images: string[] = [];
  mainImageSrc: string = '';
  currentIndex: number = 0;

  constructor(private catImageService: CatImageService) {}

  /**
   * To set the first image src as the mainImageSrc
   */
  ngOnInit(): void {
    this.images = this.catImageService.getSelectedCategoryImages();
    if (this.images.length > 0) {
      this.mainImageSrc = this.images[0];
    }
  }

  /**
   * Fn to view/set the previous image
   */
  prevBanner() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.mainImageSrc = this.images[this.currentIndex];
  }

  /**
   * Fn to view/set the next image
   */
  nextBanner() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.mainImageSrc = this.images[this.currentIndex];
  }
}

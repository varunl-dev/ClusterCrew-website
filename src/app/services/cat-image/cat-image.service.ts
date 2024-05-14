import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatImageService {
  private selectedCategoryImages: string[] = [];

  setSelectedCategoryImages(images: string[]): void {
    this.selectedCategoryImages = images;
  }

  getSelectedCategoryImages(): string[] {
    return this.selectedCategoryImages;
  }
}

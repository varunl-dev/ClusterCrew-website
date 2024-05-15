import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CatImageService } from '../../services';

@Injectable({
  providedIn: 'root',
})

/**
 * Image Gallery Authentication Guard
 */
export class ImageGalleryAuthGuard implements CanActivate {
  constructor(
    private catImageService: CatImageService,
    private router: Router
  ) {}

  /**
   * Fn to get the image from service
   * If the image length is > 0 image gallery component will load 
   * Else homepage will load
   */
  canActivate(): boolean {
    const images = this.catImageService.getSelectedCategoryImages();
    if (images.length === 0) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

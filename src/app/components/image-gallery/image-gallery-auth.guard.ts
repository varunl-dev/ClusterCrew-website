import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CatImageService } from '../../services';

@Injectable({
  providedIn: 'root',
})
export class ImageGalleryAuthGuard implements CanActivate {
  constructor(
    private catImageService: CatImageService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const images = this.catImageService.getSelectedCategoryImages();
    if (images.length === 0) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

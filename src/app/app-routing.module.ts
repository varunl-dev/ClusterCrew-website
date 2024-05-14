import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent, HomePageComponent } from './pages';
import { ImageGalleryComponent } from './components';
import { ImageGalleryAuthGuard } from './components/image-gallery/image-gallery-auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'image-gallery',
    component: ImageGalleryComponent,
    canActivate: [ImageGalleryAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

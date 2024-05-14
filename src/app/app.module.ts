import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages';
import { HeaderComponent } from './components';
import { MessageDisplayComponent } from './components/message-display/message-display.component';
import { BannerComponent } from './components/banner/banner.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TripCategoriesComponent } from './components/trip-categories/trip-categories.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { CatImageService } from './services';
import { CcFooterComponent } from './components/cc-footer/cc-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MessageDisplayComponent,
    BannerComponent,
    TripCategoriesComponent,
    AboutUsComponent,
    ImageGalleryComponent,
    CcFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideAnimationsAsync(),
    provideAnimationsAsync('noop'),
    CatImageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent, HomePageComponent } from './pages';
import {
  BannerComponent,
  CCFooterComponent,
  HeaderComponent,
  ImageGalleryComponent,
  MessageDisplayComponent,
  TripCategoriesComponent,
} from './components';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CatImageService } from './services';

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
    CCFooterComponent,
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

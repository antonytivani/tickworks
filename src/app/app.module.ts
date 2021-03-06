import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavComponent } from './components/nav/nav.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { UpcomingNotificationCountdownComponent } from './components/upcoming-notification-countdown/upcoming-notification-countdown.component';
import { MultiItemCarouselComponent } from './components/multi-item-carousel/multi-item-carousel.component';
import { WhatPeopleSayComponent } from './components/what-people-say/what-people-say.component';
import { TopPicksComponent } from './components/top-picks/top-picks.component';
import { ServicesComponent } from './components/services/services.component';
import { OffersComponent } from './components/offers/offers.component';
import { FooterComponent } from './components/footer/footer.component';

//services
import { CarouselService } from './services/carousel.service';
import { ArrivalService } from './services/arrival.service';
import { TestimonialsService } from './services/testimonials';
import { MultiCarouselService } from './services/multi-carousel';
import { ServiceService } from './services/service.service';
import { OfferService } from './services/offer';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShopComponent } from './components/shop/shop.component';
import { OrderComponent } from './components/order/order.component';
import { CheckOutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    NavComponent,
    NewArrivalsComponent,
    UpcomingNotificationCountdownComponent,
    MultiItemCarouselComponent,
    WhatPeopleSayComponent,
    TopPicksComponent,
    ServicesComponent,
    OffersComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    ShopComponent,
    OrderComponent,
    CheckOutComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, MDBBootstrapModule.forRoot()],
  providers: [CarouselService, ArrivalService, TestimonialsService, MultiCarouselService, ServiceService, OfferService],
  bootstrap: [AppComponent],
})
export class AppModule {}

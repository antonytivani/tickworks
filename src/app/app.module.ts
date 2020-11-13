import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, TableModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
 
import { MDBBootstrapModulePro, MDBModalService, ModalModule } from 'ng-uikit-pro-standard';

import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

// required animations module
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";  
import { ToastrModule } from "ngx-toastr"; //ToastrModule added



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
import { ModalComponent } from './components/modal/modal.component';


//services
import { CarouselService } from './services/carousel.service';
import { ProductService } from './services/product.service';
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
import { CartService } from './services/cart.service';
import { FormsModule } from '@angular/forms';
import { EmailService } from './services/email.service';
// import { ModalModule } from 'projects/angular-bootstrap-md/src/public_api';

// MODAL
// import { MDBBootstrapModulesPro, MDBSpinningPreloader} from "ng-uikit-pro-standard";

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
    ModalComponent,
    
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule, 
    HttpClientModule, 
    MDBBootstrapModule.forRoot(), 
    MDBBootstrapModulePro.forRoot(),
    TableModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    CarouselService, 
    ProductService, 
    EmailService, 
    CartService, 
    TestimonialsService, 
    MultiCarouselService, 
    ServiceService, 
    OfferService,
    MDBSpinningPreloader,
    MDBModalService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { MultiCarousel } from 'src/app/models/multi-carousel';
import { MultiCarouselService } from 'src/app/services/multi-carousel';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

// modal
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-multi-item-carousel',
  templateUrl: './multi-item-carousel.component.html',
  styleUrls: ['./multi-item-carousel.component.scss'],
})
export class MultiItemCarouselComponent implements OnInit {
  // cards: MultiCarousel[];

  currentProduct: Product;
  modalRef: MDBModalRef
  fakeArray = new Array(5)

  constructor(
    private multiCarouselService: MultiCarouselService,
    private cartService: CartService,
    private modalService: MDBModalService) { }

  cards = [
    {
      image: '../../../assets/images/shop/leather-belt.png',
      name: 'Tevise',
      price: 999.0,
      quantity: 1,
      noOfStars: 0,
      votes: 0
    },
    {
      image: '../../../assets/images/shop/5.png',
      name: 'Curren 8329',
      price: 699.0,
      quantity: 1,
      noOfStars: 0,
      votes: 0
    },
    {
      image: '../../../assets/images/shop/new-3.png',
      name: 'Curren 8301',
      price: 599.0,
      quantity: 1,
      noOfStars: 0,
      votes: 0
    },
    {
      image: '../../../assets/images/shop/watch_011.png',
      name: 'Curren 000',
      price: 599.0,
      quantity: 1,
      noOfStars: 0,
      votes: 0
    },
    {
      image: '../../../assets/images/shop/watch6.png',
      name: 'Title',
      price: 649.0,
      quantity: 1,
      noOfStars: 0,
      votes: 0
    },
    {
      image: '../../../assets/images/shop/watch7.png',
      name: 'Title',
      price: 649.0,
      quantity: 1,
      noOfStars: 0,
      votes: 0
    },
    {
      image: '../../../assets/images/shop/watch6.png',
      name: 'Title',
      price: 649.0,
      quantity: 1,
      noOfStars: 0,
      votes: 0
    },
    {
      image: '../../../assets/images/shop/watch7.png',
      name: 'Title',
      price: 649.0,
      quantity: 1,
      noOfStars: 0,
      votes: 0
    },
  ];

  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.slides = this.chunk(this.cards, 4);
  }

  setCurProduct(curProd: Product) {
    this.currentProduct = curProd;
    this.openModal(curProd)
  }

  openModal(product: Product) {
    this.modalRef = this.modalService.show(ModalComponent, { data: { product: product } })
  }

  // ============================================================================
  // hack
  rate(e, product: Product) {
    let collection = e.target.parentElement.parentElement.parentElement.childNodes
    let item = e.target.parentElement.parentElement

    collection.forEach((e, i) => {
      if (e === item) {
        let sel = i

        product.noOfStars += sel + 1
        product.votes += 1

        let avarage = Math.round(product.noOfStars / product.votes)

        for (let index = 0; index < avarage; index++) {
          const element = collection[index];
          element.classList.add('rated')
        }

        console.log(avarage);

      }

    })

  }
  // ========================================================================
}


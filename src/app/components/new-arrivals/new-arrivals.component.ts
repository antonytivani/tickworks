import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

// modal
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit {
  products: Product[];

  modalRef: MDBModalRef

  // track currect product
  currentProduct: Product ;

  constructor(
    private productService: ProductService,
    private modalService: MDBModalService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  setCurProduct(curProd: Product) {
    this.currentProduct = curProd;
    this.openModal( curProd )
  }

  openModal( product: Product ) {
    this.modalRef = this.modalService.show(ModalComponent, { data: { product: product } })
  }
}

import {Component} from '@angular/core';
import {Product} from '../../services/product-service';
import {ProductService} from '../../services/product-service';

@Component({
  selector: 'pagina_principal',
  styleUrls: ['app/components/home/home.css'],
  template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <producto-carousel></producto-carousel>
      </div>
    </div>
    <div class="row">
      <div *ngFor="let product of products" class="col-sm-4 col-lg-4 col-md-4">
        <articulo-producto [product]="product"></articulo-producto>
      </div>
    </div>
  `
})
export default class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}

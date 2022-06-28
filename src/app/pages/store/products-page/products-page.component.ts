import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {

  public products: Product[] = []

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(): void {
    this.service.getProducts().subscribe(products => this.products = products)
    console.log(this.products)
  }

}
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getProductDetails(params.get('id'));
    });
  }

  getProductDetails(id) {
    this.productService.getResourceById(id).subscribe(res => this.product = res);
  }
}

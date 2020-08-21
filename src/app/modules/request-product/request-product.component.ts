import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-request-product',
  templateUrl: './request-product.component.html',
  styleUrls: ['./request-product.component.sass']
})
export class RequestProductComponent implements OnInit {

  formRequestProduct: FormGroup;
  products = [];

  constructor(private formBuilder: FormBuilder) {
    this.formRequestProduct = this.formBuilder.group({
      products: [''],

    });

    // async orders
    of(this.getProducts()).subscribe(products => {
      this.products = products;
      this.formRequestProduct.controls.products.patchValue(this.products[0].id);
    })
  }

  ngOnInit(): void {
  }

  closeRequestProduct() {
    console.log('Close request product')
  }

  createProduct() {
    console.log(this.formRequestProduct.value);
  }

  getProducts() {
    return [
      { id: '1', name: 'Libranza' },
      { id: '2', name: 'Saving Account' },
      { id: '3', name: 'Checkout Account' },
    ];
  }
}

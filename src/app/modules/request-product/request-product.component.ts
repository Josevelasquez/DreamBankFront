import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-request-product',
  templateUrl: './request-product.component.html',
  styleUrls: ['./request-product.component.sass'],
})
export class RequestProductComponent implements OnInit {
  formRequestProduct: FormGroup;
  products = [
    { id: '1', name: 'Libranza' },
    { id: '2', name: 'Saving Account' },
    { id: '3', name: 'Checkout Account' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.formRequestProduct = new FormGroup({
      products: new FormControl(this.products[0], Validators.required),
    })
  }

  ngOnInit(): void {
    this.createFormProduct();
  }

  createFormProduct() {
    // synchronous orders
    console.log(this.products);
    // this.formRequestProduct.controls.orders.patchValue(this.products[0].id);
  }

  closeRequestProduct() {
    console.log('Close request product');
  }

  createProduct() {
    console.log(this.formRequestProduct.value);
  }
}

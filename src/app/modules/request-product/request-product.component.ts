import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-product',
  templateUrl: './request-product.component.html',
  styleUrls: ['./request-product.component.sass']
})
export class RequestProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeRequestProduct() {
    console.log('Close request product')
  }
}

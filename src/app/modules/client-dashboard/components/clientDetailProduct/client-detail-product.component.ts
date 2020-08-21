import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userServices/user.service';

export interface clientTransactions {
  cltr_id: number;
  cltr_timesatamp: string;
  cltr_description: string;
  curr_shortname: string;
  stat_name: string;
  cltr_value: number;
  cltr_balance: number;
}
const CLIENTS_TRANSACTIONS: clientTransactions[] = [
  {
    cltr_id: 1,
    cltr_timesatamp: '2020-08-19T05:14:42.000Z',
    cltr_description: 'Este fue tu primera operacion',
    curr_shortname: 'USD',
    stat_name: 'PENDING',
    cltr_value: 1000000,
    cltr_balance: 1000000,
  },
  {
    cltr_id: 2,
    cltr_timesatamp: '2020-08-19T05:16:23.000Z',
    cltr_description: 'Esta fue tu segunda transaccion',
    curr_shortname: 'USD',
    stat_name: 'PENDING',
    cltr_value: -12345,
    cltr_balance: 987655,
  },
  {
    cltr_id: 3,
    cltr_timesatamp: '2020-08-19T05:18:18.000Z',
    cltr_description: 'Esta fue tu tercera transaccion',
    curr_shortname: 'USD',
    stat_name: 'INACTIVE',
    cltr_value: -23456,
    cltr_balance: 964199,
  },
];

@Component({
  selector: 'app-client-detail-product',
  templateUrl: './client-detail-product.component.html',
  styleUrls: ['./client-detail-product.component.sass'],
})
export class ClientDetailProductComponent implements OnInit {
  displayedColumns: string[] = ['Date', 'Description', 'Currency', 'Value'];
  dataSource;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getDetailProduct(23145678).subscribe((res)=> {
      this.dataSource = res['body']
    })
  }
}

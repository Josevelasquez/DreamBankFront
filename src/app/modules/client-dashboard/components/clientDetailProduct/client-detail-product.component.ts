import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userServices/user.service';
import { ActivatedRoute } from '@angular/router';

export interface clientTransactions {
  cltr_id: number;
  cltr_timesatamp: string;
  cltr_description: string;
  curr_shortname: string;
  stat_name: string;
  cltr_value: number;
  cltr_balance: number;
}

@Component({
  selector: 'app-client-detail-product',
  templateUrl: './client-detail-product.component.html',
  styleUrls: ['./client-detail-product.component.sass'],
})
export class ClientDetailProductComponent implements OnInit {
  displayedColumns: string[] = ['Date', 'Description', 'Currency', 'Value'];
  dataSource;
  accountNumber;
  constructor(
    private userService: UserService,
    private router: ActivatedRoute
  ) {
    this.getId();
  }

  ngOnInit(): void {
    console.log()
    this.getTransactionsProduct(this.accountNumber);
  }

  getId() {
    this.router.params.subscribe((res)=> {
      this.accountNumber = res['id'];
    })
  }

  getTransactionsProduct(accountNumber) {
    this.userService.getDetailProduct(accountNumber).subscribe((res) => {
      this.dataSource = res['body'];
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userServices/user.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.sass']
})
export class ClientDashboardComponent implements OnInit {

  displayedColumns: string[] = ['Type', 'Account Name', 'Status', 'Currency'];
  dataSource;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const idCliente =  localStorage.getItem('idClient');
    this.userService.getAllProductByClient(idCliente).subscribe((res) => {
      console.log(res);
      this.dataSource = res['body']
    });
  }
}

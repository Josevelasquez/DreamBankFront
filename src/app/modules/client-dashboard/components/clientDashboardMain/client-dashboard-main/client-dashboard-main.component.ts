import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-client-dashboard-main',
  templateUrl: './client-dashboard-main.component.html',
  styleUrls: ['./client-dashboard-main.component.sass'],
})
export class ClientDashboardMainComponent implements OnInit {
  constructor(private userService: UserService) {}

  displayedColumns: string[] = ['Type', 'Account Name', 'Status', 'Currency','Balance'];
  dataSource;
  ngOnInit(): void {
    this.createDashboard()
  }

  createDashboard() {
    const idCliente =  localStorage.getItem('idClient');
    this.userService.getAllProductByClient(idCliente).subscribe((res) => {
      console.log(res);
      this.dataSource = res['body']
    });
  }
}

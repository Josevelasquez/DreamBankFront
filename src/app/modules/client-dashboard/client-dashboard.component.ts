import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userServices/user.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.sass']
})
export class ClientDashboardComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }
}

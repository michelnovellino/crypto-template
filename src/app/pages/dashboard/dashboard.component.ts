import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: Array<any> = [
    {
      type: "ENVIO DE FONDOS",
      amount: 3445,
      status: 1,
      date: "12/11/2019 17:52:23"
    },
    {
      type: "ENVIO DE FONDOS",
      amount: 2445,
      status: 2,
      date: "13/11/2019 15:52:23"
    },
    {
      type: "RECIBO DE FONDOS",
      amount: 4445,
      status: 3,
      date: "15/11/2019 12:52:23"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/services/coins.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slides = [
    { name: "Bitcoin", short: "BTC", value: '4186', percentage: 2, icon: "up" },
    { name: "Ethereum", short: "ETH", value: '4186', percentage: 4, icon: "up" },
    { name: "Dash", short: "DASH", value: '4186', percentage: -1, icon: "down" },
    { name: "Petro", short: "PTR", value: '0,0034186', percentage: +0.34, icon: "up" },
    { name: "Bolívares", short: "BS", value: '5254186', percentage: 1.5, icon: "up" },
    { name: "Euro", short: "Euro", value: '486', percentage: -0.45, icon: "down" }
  ];
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    infinite: true,
    autoplay: true,
    autoplaySpeed: 55000,
  };

  constructor(public service: CoinsService) { }

  ngOnInit(): void {
    //this.service.getCoins().subscribe(res => console.log(res))
  }
  slickInit(e) {
    console.log('slick initialized');
  }


}

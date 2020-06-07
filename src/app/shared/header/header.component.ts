import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/services/coins.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slides = [
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  constructor(public service: CoinsService) { }

  ngOnInit(): void {
    //this.service.getCoins().subscribe(res => console.log(res))
  }
  slickInit(e) {
    console.log('slick initialized');
  }


}

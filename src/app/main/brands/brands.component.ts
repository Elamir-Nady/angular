import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options2 } from '../constant';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  public slidesStore!: any[];
  public customOptions2: OwlOptions = options2;
  ngOnInit(): void {
    this.slidesStore = [
      {
        id : 1,
        src: "assets/img/brand-1.svg",
        alt: "brand-1",
        title: "brand-1",
      },
      {
        id : 2,
        src: "assets/img/brand-2.svg",
        alt: "brand-2",
        title: "brand-2",
      },
      {
        id : 3,
        src: "assets/img/brand-1.svg",
        alt: "brand-3",
        title: "brand-3",
      },
      {
        id : 4,
        src: "assets/img/brand-2.svg",
        alt: "brand-4",
        title: "brand-4",
      },
      {
        id : 5,
        src: "assets/img/brand-1.svg",
        alt: "brand-1",
        title: "brand-1",
      }
    ];
  }
}

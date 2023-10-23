import { trigger, transition, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeIn, fadeOut } from 'src/app/animations/carousel.animations';
import { HomepageHero } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-business-page-hero',
  templateUrl: './business-page-hero.component.html',
  styleUrls: ['./business-page-hero.component.scss'],

  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, { params: { time: '1000ms' } })]),
      transition("* => void", [useAnimation(fadeOut, { params: { time: '1000ms' } })]),
    ])
  ]

})
export class BusinessPageHeroComponent {

  subImages: string[] = [
    '/assets/images/cc-machine.png',
    '/assets/images/receipt.png',
    '/assets/images/wallet-withdraw.png',
    '/assets/images/shopping-basket.png'
  ]; 

  // Making hero info available to edit later in CMS by giving it a model
  businesspageHero: HomepageHero[] = [
    {tagText: 'Mojo', mainTitle: 'Business is best with Mojo', subTitle: "Business is much simpler being a Mojo Merchant."}
  ]

  currentSlide = 0;

  goToImage(index: number) {
    this.currentSlide = index;
  }

}

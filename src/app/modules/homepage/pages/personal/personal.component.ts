import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageHero, MojoForYou, PaymentLikeNeverBefore } from 'src/app/models/homepage.models';
import { ScrollService } from 'src/services/scroll.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  constructor(private scrollService: ScrollService, private router: Router) {
    this.scrollService.scrollToClass.subscribe(className => {
      const elements = document.getElementsByClassName(className);
      if (elements.length > 0) {
        const firstElement = elements[0] as HTMLElement;
        firstElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    });
  }

  // navigateToFaq() {
  //   this.router.navigateByUrl('/personal/faq');
  // }

  currencySupport: MojoForYou[] = [
    { image: '/assets/images/currency-support.png', subheader: 'We currently support', mainHeader: '2 currencies', points: ['Fresh Lebanese Pounds', 'Fresh United States Dollars',] }
  ]

  paymentLikeNeverBefore: PaymentLikeNeverBefore[] = [
    { mainHeader: 'Payments like never before', subTitle: "Why paying with Mojo is everyones choice.", outerBg: 'rgba(241, 241, 255, 1)', cardInfoOne: [
      { cardTitle: 'Payments to over 100+ companies', cardSubTitle:'Go cashless with Mojo payment.', innerBg: '/assets/images/100-companies-mojo-img.jpg'},
      { cardTitle:'Use Mojo anywhere in the world', cardSubTitle:'Mojoers can use Mojo anywhere. #Coming Soon',  innerBg: '/assets/images/around-the-world-img.jpg'}
    ] }
  ]

  spendWithConfidence: HomepageHero[] = [
    {tagText: '', mainTitle: 'Spend with Confidence', subTitle: 'With Mojo spend analytics you can determine and create your spend path.'}
  ]

 
}

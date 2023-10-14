import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FeaturePoints, MojoForYou, PaymentLikeNeverBefore, StepsVideos, SubHeroContent } from 'src/app/models/homepage.models';
import { ScrollService } from 'src/services/scroll.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {

  constructor(private scrollService: ScrollService, private sanitizer: DomSanitizer) {
    this.scrollService.scrollToClass.subscribe(className => {
      const elements = document.getElementsByClassName(className);
      if (elements.length > 0) {
        const firstElement = elements[0] as HTMLElement;
        firstElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    });
  }


  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  currencySupport: MojoForYou[] = [
    { image: '/assets/images/currency-support.png', subheader: 'We currently support', mainHeader: '2 currencies', points: ['Fresh Lebanese Pounds', 'Fresh United States Dollars',] }
  ]

  becomeMerchantOrAgent: PaymentLikeNeverBefore[] = [
    { mainHeader: '', subTitle: "", outerBg: 'rgba(253, 225, 255, 1)', cardInfoOne: [
      { cardTitle: 'How to become a merchant', cardSubTitle:'All you need to know to become a merchant.', innerBg: 'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z'},
      { cardTitle:'How to become an agent', cardSubTitle:'All you need to know to become an agent.',  innerBg: 'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z'}
    ] }
  ]

  howItWorks : StepsVideos[] = [
    {title: 'Load your Wallet', description: 'You can easily fund your account', videoLink: 'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z'},
    {title: 'Send Money', description: 'Learn to transfer your funds.', videoLink: 'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z'},
    {title: 'Make Payments', description: 'You can pay and receive funds very quickly.', videoLink: 'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z'}
  ]

  convenientPayments: SubHeroContent[] = [
    {mainTitle: 'Convenient Payments', subTitle: 'QR code payments are quick and easy for both the customer and the merchant. Customers simply scan the code, and the payment is processed instantly.'}
  ]

  understandCashFlows: SubHeroContent[] = [
    {mainTitle: 'Tracking and Analytics', subTitle: 'Merchants can access transaction data and analytics, helping them better understand customer behavior and preferences.'}
  ]

  securedPayments: FeaturePoints[] = [
    {backgroundColor: 'rgba(251, 224, 254, 1)', image: '/assets/images/padlock.png', mainTitle: 'Enhanced Security', subTitle: 'QR code payments employ strong encryption and security measures, reducing the risk of fraud and chargebacks.', flexDirection: 'row'}
  ]

  quickSettlements: FeaturePoints[] = [
    {backgroundColor: 'rgba(241, 241, 255, 1)', image: '/assets/images/briefcase-coins.png', mainTitle: 'Quick Settlements', subTitle: 'Instant withdrawals of Mojo cash into your bank account. Or settle with us in 24hrs', flexDirection: 'row-reverse'}
  ]

  worldwidePayments: FeaturePoints[] = [
    {backgroundColor: 'rgba(241, 241, 255, 1)', image: '/assets/images/globe.png', mainTitle: 'Receive from Mojoers worldwide', subTitle: 'Mojo subscribers can make payments from everywhere in the world.', flexDirection: 'row'}
  ]
 
}

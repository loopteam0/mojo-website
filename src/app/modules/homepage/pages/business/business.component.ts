import { Component } from '@angular/core';
import { FeaturePoints, MojoForYou, PaymentLikeNeverBefore, SubHeroContent } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {

  currencySupport: MojoForYou[] = [
    { image: '/assets/images/currency-support.png', subheader: 'We currently support', mainHeader: '2 currencies', points: ['Fresh Lebanese Pounds', 'Fresh United States Dollars',] }
  ]

  becomeMerchantOrAgent: PaymentLikeNeverBefore[] = [
    { mainHeader: '', subTitle: "", outerBg: 'rgba(253, 225, 255, 1)', cardInfoOne: [
      { cardTitle: 'How to become a merchant', cardSubTitle:'Downloads our App', innerBg: 'rgba(255, 225, 205, 1)'},
      { cardTitle:'How to become an agent', cardSubTitle:'Lorem Ipsum',  innerBg: 'rgba(241, 241, 255, 1)'}
    ] }
  ]

  convenientPayments: SubHeroContent[] = [
    {mainTitle: 'Convenient Payments', subTitle: 'Get paid in person with secured QR codes. With Mojo scan payments are convenient and easy to follow through for auditing purpose. All you need is the Mojo Merchants App.'}
  ]

  understandCashFlows: SubHeroContent[] = [
    {mainTitle: 'Understand your cashflows', subTitle: 'With Mojo spend analytics you can determine and create your spend path.'}
  ]

  securedPayments: FeaturePoints[] = [
    {backgroundColor: 'rgba(251, 224, 254, 1)', image: '/assets/images/padlock.png', mainTitle: 'Trust that your payments are secured', subTitle: 'Get paid directly with secured QR codes. With Mojo scan payments are convenient and easy to follow through for auditing purpose. All you need is the Mojo Merchants App.', flexDirection: 'row'}
  ]

  quickSettlements: FeaturePoints[] = [
    {backgroundColor: 'rgba(241, 241, 255, 1)', image: '/assets/images/briefcase-coins.png', mainTitle: 'Quick Settlements', subTitle: 'Instant withdrawals of Mojo cash into your bank account. Or settle with us in 24hrs', flexDirection: 'row-reverse'}
  ]

  worldwidePayments: FeaturePoints[] = [
    {backgroundColor: 'rgba(241, 241, 255, 1)', image: '/assets/images/globe.png', mainTitle: 'Receive from Mojoers worldwide', subTitle: 'Mojo subscribers can make payments from everywhere in the world.', flexDirection: 'row'}
  ]
 
}

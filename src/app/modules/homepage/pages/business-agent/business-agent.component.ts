import { Component } from '@angular/core';
import { FeaturePoints, HomepageHero, MojoForYou, PaymentLikeNeverBefore, SubHeroContent } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-business-agent',
  templateUrl: './business-agent.component.html',
  styleUrls: ['./business-agent.component.scss']
})
export class BusinessAgentComponent {

  businesspageHero: HomepageHero[] = [
    {tagText: 'Mojo', mainTitle: 'Meet our Partners', subTitle: "Mojo Merchants App has all you need to receive payments."}
  ]

  currencySupport: MojoForYou[] = [
    { image: '/assets/images/currency-support.png', subheader: 'We currently support', mainHeader: '2 currencies', points: ['Fresh Lebanese Pounds', 'Fresh United States Dollars',] }
  ]

  becomeMerchantOrAgent: PaymentLikeNeverBefore[] = [
    { mainHeader: '', subTitle: "", outerBg: 'rgba(253, 225, 255, 1)', cardInfoOne: [
      { cardTitle: 'How to Cash In as agent', cardSubTitle:'All you need to know', innerBg: 'rgba(241, 241, 255, 1)'},
      { cardTitle:'How to register', cardSubTitle:'All you need to know',  innerBg: 'rgba(255, 225, 205, 1)'},
      { cardTitle:'How to Cash In as agent', cardSubTitle:'All you need to know',  innerBg: 'rgba(217, 217, 217, 1)'}
    ] }
  ]

  
  worldwidePayments: FeaturePoints[] = [
    {backgroundColor: 'rgba(241, 241, 255, 1)', image: '/assets/images/icn-m-logo-big.png', mainTitle: 'Why Partner With Us?', subTitle: 'Get access to a whole network of merchants through Mojo.', flexDirection: 'row'}
  ]
 
}

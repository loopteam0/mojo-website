import { Component } from '@angular/core';
import { BusinessAgentsBenefits, FeaturePoints, HomepageHero, MojoForYou, PaymentLikeNeverBefore, RegistrationRequirements, SubHeroContent } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-business-agent',
  templateUrl: './business-agent.component.html',
  styleUrls: ['./business-agent.component.scss']
})
export class BusinessAgentComponent {

  businesspageHero: HomepageHero[] = [
    {tagText: 'Mojo', mainTitle: 'Meet our Partners', subTitle: "Mojo Merchants App has all you need to receive payments."}
  ]

  agentsBenefitsHeader: HomepageHero[] = [
    {tagText: 'Agent Benefits', subTitle: 'Lorem Ipsum stuff right here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.', mainTitle: 'What you get for partnering with Mojo.'},
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

  agentsBenefits: BusinessAgentsBenefits[] = [
    {icon: '/assets/svgs/icn-people-group.svg', iconContainerBG: 'rgba(212, 217, 245, 1)', mainTitle: 'Increase Customer Traffic', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
    {icon: '/assets/svgs/icn-dollar-green.svg', iconContainerBG: 'rgba(229, 255, 235, 1)', mainTitle: 'Absorbed Cost of Cash', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
    {icon: '/assets/svgs/icn-equal-to-orange.svg', iconContainerBG: 'rgba(255, 223, 205, 1)', mainTitle: 'Lower transaction fees', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
    {icon: '/assets/svgs/icn-heart-pink.svg', iconContainerBG: 'rgba(253, 225, 255, 1)', mainTitle: 'Add value to Lebanon', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
  ]

  registrationRequirements: RegistrationRequirements[] = [
    {mainText: 'Registration Requirements', point: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Nullam dictum ligula a gravida porta.', 'Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.', 'Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.', 'Nulla non enim eu quam rutrum dictum in non urna.']}
  ]
 
}

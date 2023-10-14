import { Component } from '@angular/core';
import {
  BusinessAgentsBenefits,
  FeaturePoints,
  HomepageHero,
  MojoForYou,
  PaymentLikeNeverBefore,
  RegistrationRequirements,
  StepsVideos,
  SubHeroContent,
} from 'src/app/models/homepage.models';
import { DomSanitizer } from '@angular/platform-browser';
import { ScrollService } from 'src/services/scroll.service';

@Component({
  selector: 'app-business-agent',
  templateUrl: './business-agent.component.html',
  styleUrls: ['./business-agent.component.scss'],
})
export class BusinessAgentComponent {
  
  onNavLinkClick(sectionId: string) {
    this.scrollService.scrollToClass.emit(sectionId);
  }

  constructor(private sanitizer: DomSanitizer, private scrollService: ScrollService) {
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

  businesspageHero: HomepageHero[] = [
    {
      tagText: 'Mojo',
      mainTitle: 'Meet our Partners',
      subTitle: 'Business is much simpler being a Mojo Agent.',
    },
  ];

  // Agent Benefits Header
  agentsBenefitsHeader: HomepageHero[] = [
    {
      tagText: 'Agent Benefits',
      subTitle:
        'Acting as an agent for a wallet operator can be a step toward digitalization for a traditional brick-and-mortar business. This can help the business stay relevant and adapt to changing consumer preferences for digital payments.',
      mainTitle: 'What you get for partnering with Mojo.',
    },
  ];

  currencySupport: MojoForYou[] = [
    {
      image: '/assets/images/currency-support.png',
      subheader: 'We currently support',
      mainHeader: '2 currencies',
      points: ['Fresh Lebanese Pounds', 'Fresh United States Dollars'],
    },
  ];

  stepsWithVideos: StepsVideos[] = [
    {
      title: 'How to Cash In as agent',
      description: 'All you need to know',
      videoLink:
        'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z',
    },
    {
      title: 'How to register',
      description: 'All you need to know',
      videoLink:
        'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z',
    },
    {
      title: 'How to Cash In as agent',
      description: 'All you need to know',
      videoLink:
        'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z',
    },
  ];

  // Partner with us (Feature point)
  worldwidePayments: FeaturePoints[] = [
    {
      backgroundColor: 'rgba(241, 241, 255, 1)',
      image: '/assets/images/icn-m-logo-big.png',
      mainTitle: 'Why Partner With Us?',
      subTitle:
        'Collaborating with Mojo can lead to potential partnership opportunities, such as joint marketing campaigns or discounts for wallet users, which can further benefit the merchant.',
      flexDirection: 'row',
    },
  ];

  // Understand your transaction (Feature point)
  understandTransaction: FeaturePoints[] = [
    {
      backgroundColor: 'rgba(241, 241, 255, 1)',
      image: '/assets/images/subHero.png',
      mainTitle: 'Understand your Transaction',
      subTitle:
        'Mojo can provide data and analytics on customer transactions. This information can help merchants better understand their customer base and tailor their offerings to customer preferences.',
      flexDirection: 'row-reverse',
    },
  ];

  // Agent Benefits information
  agentsBenefits: BusinessAgentsBenefits[] = [
    {
      icon: '/assets/svgs/icn-people-group.svg',
      iconContainerBG: 'rgba(212, 217, 245, 1)',
      mainTitle: 'Increased Foot Traffic',
      subTitle:
        "Acting as a cash-in and cash-out agent can attract more customers to the merchant's store. Customers visiting the store for wallet-related transactions may also make additional purchases, increasing overall foot traffic and potential sales.",
    },
    {
      icon: '/assets/svgs/icn-dollar-green.svg',
      iconContainerBG: 'rgba(229, 255, 235, 1)',
      mainTitle: 'Reduced Cash Handling',
      subTitle:
        'By facilitating digital transactions through wallet services, merchants can reduce the amount of cash they need to handle and store, which can enhance security and reduce the risk of theft.',
    },
    {
      icon: '/assets/svgs/icn-equal-to-orange.svg',
      iconContainerBG: 'rgba(255, 223, 205, 1)',
      mainTitle: 'Competitive Advantage',
      subTitle:
        'In markets where wallet services are gaining a fast popularity, becoming an agent can give a merchant a competitive advantage. It sets the business apart from competitors who do not offer such services.',
    },
    {
      icon: '/assets/svgs/icn-heart-pink.svg',
      iconContainerBG: 'rgba(253, 225, 255, 1)',
      mainTitle: 'Financial Inclusion',
      subTitle:
        'Wallet services can promote financial inclusion by providing access to digital financial services for individuals who may not have access to traditional banking. As an agent, the merchant can contribute to expanding financial inclusion in their community.',
    },
  ];

  registrationRequirements: RegistrationRequirements[] = [
    {
      mainText: 'Registration Requirements',
      point: [
        'Completed and Signed Application Form. Download the Application form here',
        'Copy of Business Registration or Trade License Certificate.',
        'Valid Identification (Social Security ID or Passport).',
        'Other documents may be required based on the ownership structure of your business.',
      ],
    },
  ];
}

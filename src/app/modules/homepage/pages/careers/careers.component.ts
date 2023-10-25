import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  BusinessAgentsBenefits,
  CareerPositionCards,
  FeaturePoints,
  HomepageHero,
  JobPositions,
  MojoForYou,
  MojoeeBenefitsCards,
  NewsCards,
  PaymentLikeNeverBefore,
  RegistrationRequirements,
  SubHeroContent,
} from 'src/app/models/homepage.models';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent {
  constructor(private router: Router) {}

  // Tab group functionality
  tabSelected: string = 'tab1';

  setActiveTab(tab: string) {
    this.tabSelected = tab;
  }

  items: string[] = ['All', 'Customer Support', 'Marketing'];
  selectedOption: string = '';
  showDropdown: boolean = false;

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  selectOption(option: string, tab: string): void {
    this.tabSelected = tab;
    this.selectedOption = option;
    this.showDropdown = false;
  }



  // Routing to the desired position card's details when clicked on
  jobDetailsPage(positionId: string) {
    this.router.navigate(['about-us/careers', positionId]);
  }

  // Hero section
  careerPageHero: HomepageHero[] = [
    {
      tagText: 'Mojoee',
      mainTitle: 'Careers at Mojo',
      subTitle:
        'At Mojo we’re building a new kind of digital wallet. One that lives on your smartphone and built for the way you live today.',
    },
  ];

  //  Open Positions header
  openPositions: HomepageHero[] = [
    { tagText: '', subTitle: '', mainTitle: 'Open Positions' },
  ];

  //  Digital Wallet Revolution section
  digitalWallet: HomepageHero[] = [
    {
      tagText: '',
      subTitle:
        'Mojo is a wallet that integrates cash transactions with modern technology to increase efficiency and security. We are on our way to great things. We are happy to have you join us.',
      mainTitle: 'Join the Digital Wallet Revolution.',
    },
  ];

  //  Left side of Mojoee Benefits (1/2)
  mojoeeBenefitsHeader: HomepageHero[] = [
    {
      tagText: 'Mojoee Benefits',
      subTitle:
        'We want you to feel at home when you are working at Mojo. For that we have curated a great set of benefits for you.It all starts with the free lunch!',
      mainTitle: 'Why you Should Join Our Awesome Team',
    },
  ];

  //  Header of Mojoee Benefits (Working at Mojo, 2/2)
  mojoBenefitsHeader: HomepageHero[] = [
    {
      tagText: '',
      subTitle: 'We like to keep our Mojoees happy!',
      mainTitle: 'Benefits',
    },
  ];

  // Mojo Risin' section
  MojoLocations: FeaturePoints[] = [
    {
      backgroundColor: '/assets/images/maps-bg.png',
      image: '/assets/images/icn-m-logo-white.png',
      mainTitle: 'We are Growing Fast, in the Heart of Lebanon',
      subTitle: 'Mojo Risin’ can be found in 5 locations now.',
      flexDirection: 'row',
    },
  ];

  // Points for working at Mojo (Mojoee Benefits, 1/2)
  mojoeeBenefits: BusinessAgentsBenefits[] = [
    {
      icon: '/assets/svgs/icn-people-group.svg',
      iconContainerBG: 'rgba(212, 217, 245, 1)',
      mainTitle: 'Team work',
      subTitle:
        "At Mojo, we believe in the incredible power of teamwork. We're not just a workforce; we're a family that collaborates, supports, and inspires one another to achieve remarkable things. Join us, and you'll be part of a team where your individual strengths contribute to a collective success story.",
    },
    {
      icon: '/assets/svgs/icn-secure-badge-green.svg',
      iconContainerBG: 'rgba(229, 255, 235, 1)',
      mainTitle: 'Secured Future',
      subTitle:
        "We're dedicated to providing a secure future for all our team members. We understand that peace of mind and stability are essential in a fulfilling career. Join us, and you'll become part of an organization that values your long-term well-being.",
    },
    {
      icon: '/assets/svgs/icn-book-orange.svg',
      iconContainerBG: 'rgba(255, 223, 205, 1)',
      mainTitle: 'Learning Opportunity',
      subTitle:
        'Discover boundless horizons of learning at Mojo. We are not just an organization; we are a learning ecosystem that thrives on curiosity and the pursuit of knowledge.',
    },
    {
      icon: '/assets/svgs/icn-navigation-pink.svg',
      iconContainerBG: 'rgba(253, 225, 255, 1)',
      mainTitle: 'Up-Skill',
      subTitle:
        'We are committed to your continuous growth and development. With our strong focus on up-skilling, we provide you with the tools, resources, and opportunities to enhance your skills and advance your career.',
    },
  ];

  // Cards For the Open Positions section
  careerCards: CareerPositionCards[] = [
    {
      positionId: 'call-center-representative',
      position: 'Call Center Representative',
      positionType: 'Hybrid',
      location: 'Beirut',
    },
    {
      positionId: 'brach-customer-service-representative',
      position: 'Branch Customer Service Representative',
      positionType: 'Hybrid',
      location: 'Beirut',
    },
    {
      positionId: 'marketing-and-communication-specialist',
      position: 'Marketing and Communication Specialist',
      positionType: 'Hybrid',
      location: 'Beirut',
    },
    {
      positionId: 'social-media-specialist',
      position: 'Social Media Specialist',
      positionType: 'Hybrid',
      location: 'Beirut',
    },
  ];

  // Cards for working at Mojo (Mojoee Benefits, 2/2)
  mojoeeBenefitsCards: MojoeeBenefitsCards[] = [
    {
      mainHeader: 'Compensation',
      benefitsList: [
        'Monthly Salary',
        'Pension Contribution',
        'We will review your salary every year taking business performance into consideration.',
      ],
    },
    {
      mainHeader: 'Flexible Working Hours',
      benefitsList: [
        'We trust our Mojoees and believe in your commitment to work enough hours to do your job well, at times that suit you and your team.',
        'If you’re in customer operations or support, you’ll have set shifts.',
      ],
    },
    {
      mainHeader: 'Health & Wellbeing',
      benefitsList: [
        'Your health and wellbeing is important to us, we provide health insurance.',
        'We like to socialize and get out together as a team.',
      ],
    },
    {
      mainHeader: 'Personal Development',
      benefitsList: [
        'If doing a specific course can help with your work and help the company achieve better results – we’re happy to look into this!',
      ],
    },
  ];
}

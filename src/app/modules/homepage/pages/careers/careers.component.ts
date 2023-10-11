import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessAgentsBenefits, CareerPositionCards, FeaturePoints, HomepageHero, MojoForYou, MojoeeBenefitsCards, NewsCards, PaymentLikeNeverBefore, RegistrationRequirements, SubHeroContent } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {

  constructor (private router : Router){}

  // Tab group functionality
  tabSelected: string = 'tab1';

  setActiveTab(tab: string) {
    this.tabSelected = tab;
  }

  // Routing to the desired position card's details when clicked on
  jobDetailsPage(){
    this.router.navigate(['about-us/careers/job-details'])
  }

  // Hero section
  careerPageHero: HomepageHero[] = [
    {tagText: 'Mojoee', mainTitle: 'Careers at Mojo', subTitle: "At Mojo we’re building a new kind of digital wallet. One that lives on your smartphone and built for the way you live today."}
  ]

  //  Open Positions header
  openPositions: HomepageHero[] = [
    {tagText: '', subTitle: '', mainTitle: 'Open Positions'},
  ]


  //  Digital Wallet Revolution section
  digitalWallet: HomepageHero[] = [
    {tagText: '', subTitle: 'Mojo is a wallet that integrates cash transactions with modern technology to increase efficiency and security. We are on our way to great things. We are happy to have you join us.', mainTitle: 'Join the Digital Wallet Revolution.'},
  ]

  //  Left side of Mojoee Benefits (1/2)
  mojoeeBenefitsHeader: HomepageHero[] = [
    {tagText: 'Mojoee Benefits', subTitle: 'We want to feel like home when you are working at Mojo. For that we have curated a great set of benefits for you.It all starts with the free lunch!', mainTitle: 'Why you Should Join Our Awesome Team'},
  ]

  //  Header of Mojoee Benefits (Working at Mojo, 2/2)
  mojoBenefitsHeader: HomepageHero[] = [
    {tagText: '', subTitle: 'Benefits for working at Mojo', mainTitle: 'Benefits'},
  ]
  
  
  // Mojo Risin' section
  MojoLocations: FeaturePoints[] = [
    {backgroundColor: '/assets/images/maps-bg.png', image: '/assets/images/icn-m-logo-white.png', mainTitle: 'We are Growing Fast, in the Heart of Lebanon', subTitle: 'Mojo Risin’ can be found in 45 locations now.', flexDirection: 'row'}
  ]

  // Points for working at Mojo (Mojoee Benefits, 1/2)
  mojoeeBenefits: BusinessAgentsBenefits[] = [
    {icon: '/assets/svgs/icn-people-group.svg', iconContainerBG: 'rgba(212, 217, 245, 1)', mainTitle: 'Team work', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
    {icon: '/assets/svgs/icn-secure-badge-green.svg', iconContainerBG: 'rgba(229, 255, 235, 1)', mainTitle: 'Secured Future', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
    {icon: '/assets/svgs/icn-book-orange.svg', iconContainerBG: 'rgba(255, 223, 205, 1)', mainTitle: 'Learning Opportunity', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
    {icon: '/assets/svgs/icn-navigation-pink.svg', iconContainerBG: 'rgba(253, 225, 255, 1)', mainTitle: 'Up-Skill', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
  ]

  // Cards For the Open Positions section
  careerCards: CareerPositionCards[] = [
    {position: 'Call Center Representative', positionType: 'Hybrid', location: 'Beiruit'},
    {position: 'Branch Customer Service Representative', positionType: 'Hybrid', location: 'Beiruit'},
    {position: 'Marketing and Communication Specialist', positionType: 'Hybrid', location: 'Beiruit'},
    {position: 'Marketing and Communication Specialist', positionType: 'Hybrid', location: 'Beiruit'},
    {position: 'Branch Customer Service Representative', positionType: 'Hybrid', location: 'Beiruit'},
    {position: 'Call Center Representative', positionType: 'Hybrid', location: 'Beiruit'},
  ]

  // Cards for working at Mojo (Mojoee Benefits, 2/2)
  mojoeeBenefitsCards: MojoeeBenefitsCards[] = [
    {mainHeader: 'Compensation', benefitsList: ['Monthly Salary', 'Pension Contribution', 'Rent Allowance', 'Pension Contribution', 'Rent Allowance']},
    {mainHeader: 'Flexible Working Hours', benefitsList: ['Monthly Salary', 'Pension Contribution', 'Rent Allowance', 'Pension Contribution', 'Rent Allowance']},
    {mainHeader: 'Health & Wellbeing', benefitsList: ['Monthly Salary', 'Pension Contribution', 'Rent Allowance', 'Pension Contribution', 'Rent Allowance']},
    {mainHeader: 'Learning', benefitsList: ['Monthly Salary', 'Pension Contribution', 'Rent Allowance', 'Pension Contribution', 'Rent Allowance']},
    {mainHeader: 'Family', benefitsList: ['Monthly Salary', 'Pension Contribution', 'Rent Allowance', 'Pension Contribution', 'Rent Allowance']},
    {mainHeader: 'Community', benefitsList: ['Monthly Salary', 'Pension Contribution', 'Rent Allowance', 'Pension Contribution', 'Rent Allowance']},
  ]


  

}

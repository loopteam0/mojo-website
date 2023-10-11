import { Component } from '@angular/core';
import { BusinessAgentsBenefits, CareerPositionCards, FeaturePoints, HomepageHero, MojoForYou, NewsCards, PaymentLikeNeverBefore, RegistrationRequirements, SubHeroContent } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {

  tabSelected: string = 'tab1';

  setActiveTab(tab: string) {
    this.tabSelected = tab;
  }

  careerPageHero: HomepageHero[] = [
    {tagText: 'Mojoee', mainTitle: 'Careers at Mojo', subTitle: "At Mojo we’re building a new kind of digital wallet. One that lives on your smartphone and built for the way you live today."}
  ]

  agentsBenefitsHeader: HomepageHero[] = [
    {tagText: 'Mojoee Benefits', subTitle: 'We want to feel like home when you are working at Mojo. For that we have curated a great set of benefits for you.It all starts with the free lunch!', mainTitle: 'Why you Should Join Our Awesome Team'},
  ]
  
  MojoLocations: FeaturePoints[] = [
    {backgroundColor: '/assets/images/maps-bg.png', image: '/assets/images/icn-m-logo-white.png', mainTitle: 'We are Growing Fast, in the Heart of Lebanon', subTitle: 'Mojo Risin’ can be found in 45 locations now.', flexDirection: 'row'}
  ]

  agentsBenefits: BusinessAgentsBenefits[] = [
    {icon: '/assets/svgs/icn-people-group.svg', iconContainerBG: 'rgba(212, 217, 245, 1)', mainTitle: 'Team work', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
    {icon: '/assets/svgs/icn-secure-badge-green.svg', iconContainerBG: 'rgba(229, 255, 235, 1)', mainTitle: 'Secured Future', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
    {icon: '/assets/svgs/icn-book-orange.svg', iconContainerBG: 'rgba(255, 223, 205, 1)', mainTitle: 'Learning Opportunity', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
    {icon: '/assets/svgs/icn-navigation-pink.svg', iconContainerBG: 'rgba(253, 225, 255, 1)', mainTitle: 'Up-Skill', subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'},
  ]

  careerCards: CareerPositionCards[] = [
    {position: 'Call Center Representative', positionType: 'Hybrid', location: 'Beiruit'},
    {position: 'Branch Customer Service Representative', positionType: 'Hybrid', location: 'Beiruit'},
    {position: 'Marketing and Communication Specialist', positionType: 'Hybrid', location: 'Beiruit'},
    {position: 'Marketing and Communication Specialist', positionType: 'Hybrid', location: 'Beiruit'},
    {position: 'Branch Customer Service Representative', positionType: 'Hybrid', location: 'Beiruit'},
    {position: 'Call Center Representative', positionType: 'Hybrid', location: 'Beiruit'},
  ]


  

}

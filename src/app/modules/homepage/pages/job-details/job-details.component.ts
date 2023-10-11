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
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent {
  constructor(private router: Router) {}

  shareToFacebook() {
    const currentUrl = window.location.href;
    const specificAppUrl = 'https://facebook.com/share'; 
    
    // You can open the specific app/website link in a new tab or window
    window.open(`${specificAppUrl}?url=${encodeURIComponent(currentUrl)}`, '_blank');
  }

  shareToTwitter() {
    const currentUrl = window.location.href;
    const specificAppUrl = 'https://x.com/share'; 
    // You can open the specific app/website link in a new tab or window
    window.open(`${specificAppUrl}?url=${encodeURIComponent(currentUrl)}`, '_blank');
  }

  shareToLinkedin() {
    const currentUrl = window.location.href;
    const specificAppUrl = 'https://linkedin.com/share';

    // You can open the specific app/website link in a new tab or window
    window.open(`${specificAppUrl}?url=${encodeURIComponent(currentUrl)}`, '_blank');
  }

  // Tab group functionality
  tabSelected: string = 'tab1';

  setActiveTab(tab: string) {
    this.tabSelected = tab;
  }

  // Routing to the desired position card's details when clicked on
  jobDetailsPage() {
    this.router.navigate(['about-us/careers/job-details']);
  }

  // Hero section
  careerPageHero: HomepageHero[] = [
    { tagText: 'Mojoee', mainTitle: 'Decision Scientist Lead', subTitle: '' },
  ];

  //  Open Positions header
  openPositions: HomepageHero[] = [
    {
      tagText: '',
      subTitle: '',
      mainTitle: 'Here are Other Positions to Consider',
    },
  ];

  // Cards For the Open Positions section
  careerCards: CareerPositionCards[] = [
    {
      position: 'Call Center Representative',
      positionType: 'Hybrid',
      location: 'Beiruit',
    },
    {
      position: 'Branch Customer Service Representative',
      positionType: 'Hybrid',
      location: 'Beiruit',
    },
    {
      position: 'Marketing and Communication Specialist',
      positionType: 'Hybrid',
      location: 'Beiruit',
    },
    {
      position: 'Marketing and Communication Specialist',
      positionType: 'Hybrid',
      location: 'Beiruit',
    },
    {
      position: 'Branch Customer Service Representative',
      positionType: 'Hybrid',
      location: 'Beiruit',
    },
    {
      position: 'Call Center Representative',
      positionType: 'Hybrid',
      location: 'Beiruit',
    },
  ];

  // Left side of job details section (Its content)
  jobPositions: JobPositions[] = [
    {
      positionTitle: 'Decision Scientist Lead',
      whoWeAreLookingFor: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Nullam dictum ligula a gravida porta.',
        'Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.',
        'Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.',
        'Nulla non enim eu quam rutrum dictum in non urna.',
        'Integer et felis a purus convallis condimentum nec vel eros.',
        'Integer et felis a purus convallis condimentum nec vel eros.',
        'Duis pretium sapien vitae felis tincidunt lobortis vel et urna',
        'Cras ut erat eu ante suscipit rutrum.',
      ],

      whatYouWillBeDoing: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Nullam dictum ligula a gravida porta.',
        'Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.',
        'Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.',
        'Nulla non enim eu quam rutrum dictum in non urna.',
        'Integer et felis a purus convallis condimentum nec vel eros.',
        'Integer et felis a purus convallis condimentum nec vel eros.',
        'Duis pretium sapien vitae felis tincidunt lobortis vel et urna',
        'Cras ut erat eu ante suscipit rutrum.',
      ],

      bonusPointsFamiliarity: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Nullam dictum ligula a gravida porta.',
        'Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.',
        'Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.',
        'Nulla non enim eu quam rutrum dictum in non urna.',
      ],

      educationalRequirement:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',

        salary: [
          'Salary:  18,000 to 35,000 LBP (Depends on Skill and Experience)',
          'Salary Review: Yearly',
        ],

        workingHours: [
          '8 AM – 5 PM',
        ],

        workingDays: [
          'Weekly: 5 days.',
          'Weekend: Friday.Saturday'
        ],

        perksAndBenefits: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Nullam dictum ligula a gravida porta.',
          'Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.',
          'Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.',
          'Nulla non enim eu quam rutrum dictum in non urna.',
        ],

        applicationProcess: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Nullam dictum ligula a gravida porta.',
          'Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.',
          'Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.',
          'Nulla non enim eu quam rutrum dictum in non urna.',
        ],

        jobSummary: [
          {icon: '/assets/svgs/icn-job-location.svg', mainTitle: 'Location', subTitle: 'Beiruit, Banani11'},
          {icon: '/assets/svgs/icn-job-briefcase.svg', mainTitle: 'Job Type', subTitle: 'Full Time'},
          {icon: '/assets/svgs/icn-job-calendar.svg', mainTitle: 'Date posted', subTitle: 'posted 1 month ago'},
          {icon: '/assets/svgs/icn-job-book.svg', mainTitle: 'Experience', subTitle: 'Experience: 1-3 year'},
        ]
    },
  ];
}

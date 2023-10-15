import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selectedJob: JobPositions | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      const positionId = params['positionId'];
      this.selectedJob = this.jobPositions.find(
        (job) => job.positionId === positionId
      );
    });
  }

  shareToFacebook() {
    const currentUrl = window.location.href;
    const specificAppUrl = 'https://facebook.com/share';

    // You can open the specific app/website link in a new tab or window
    window.open(
      `${specificAppUrl}?url=${encodeURIComponent(currentUrl)}`,
      '_blank'
    );
  }

  shareToTwitter() {
    const currentUrl = window.location.href;
    const specificAppUrl = 'https://x.com/share';
    // You can open the specific app/website link in a new tab or window
    window.open(
      `${specificAppUrl}?url=${encodeURIComponent(currentUrl)}`,
      '_blank'
    );
  }

  shareToLinkedin() {
    const currentUrl = window.location.href;
    const specificAppUrl = 'https://linkedin.com/share';

    // You can open the specific app/website link in a new tab or window
    window.open(
      `${specificAppUrl}?url=${encodeURIComponent(currentUrl)}`,
      '_blank'
    );
  }

  // Tab group functionality
  tabSelected: string = 'tab1';

  setActiveTab(tab: string) {
    this.tabSelected = tab;
  }

  // Routing to the desired position card's details when clicked on
  jobDetailsPage(positionId: string) {
    this.router.navigate(['about-us/careers', positionId]);
  }


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
  ];

  // Left side of job details section (Its content)
  jobPositions: JobPositions[] = [
    {
      positionId: 'call-center-representative',
      positionTitle: 'Call Center Representative',
      whoWeAreLookingFor: [
        "We're seeking for a call center representative who will act as the company's point of contact with its current and prospective clients. The chosen candidate must be able to take responsibility for efficiently resolving client concerns, issues, and questions while maintaining client pleasure at the forefront of all actions and decisions.",
      ],

      whatYouWillBeDoing: [
        'Manage large amounts of inbound and outbound calls in a timely manner.',
        'Follow communication “scripts” when handling different topics.',
        'Identify customers’ needs, clarify information, research every issue and provide solutions and/or alternatives.',
        'Seize opportunities to upsell products when they arise.',
        'Build sustainable relationships and engage customers by taking the extra mile.',
        'Keep records of all conversations in our call center database in a comprehensible way.',
        'Frequently attend educational seminars to improve knowledge and performance level.',
        'Meet personal/team qualitative and quantitative targets',
      ],

      bonusPointsFamiliarity: [
        'Previous experience in a customer support role',
        'Track record of over-achieving quota',
        'Strong phone and verbal communication skills along with active listening',
        'Familiarity with CRM systems and practices',
        'Customer focus and adaptability to different personality types',
        'Ability to multi-task, set priorities and manage time effectively',
        'High school degree or a vocational degree in a related field',
        'Fluent in English and Arabic (French and Armenian are a plus)',
      ],

      educationalRequirement:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',

      salary: [
        'Salary:  18,000 to 35,000 LBP (Depends on Skill and Experience)',
        'Salary Review: Yearly',
      ],

      workingHours: ['8 AM – 5 PM'],

      workingDays: ['Weekly: 5 days.', 'Weekend: Friday.Saturday'],

      perksAndBenefits: ['Monthly Voice and Data Allowance', 'Free Days Off'],

      applicationProcess: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Nullam dictum ligula a gravida porta.',
        'Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.',
        'Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.',
        'Nulla non enim eu quam rutrum dictum in non urna.',
      ],

      jobSummary: [
        {
          icon: '/assets/svgs/icn-job-location.svg',
          mainTitle: 'Location',
          subTitle: 'Beirut, Banani11',
        },
        {
          icon: '/assets/svgs/icn-job-briefcase.svg',
          mainTitle: 'Job Type',
          subTitle: 'Full Time',
        },
        {
          icon: '/assets/svgs/icn-job-calendar.svg',
          mainTitle: 'Date posted',
          subTitle: 'posted 1 month ago',
        },
        {
          icon: '/assets/svgs/icn-job-book.svg',
          mainTitle: 'Experience',
          subTitle: 'Experience: 1-3 year',
        },
      ],
    },

    {
      positionId: 'social-media-specialist',
      positionTitle: 'Social Media Specialist',
      whoWeAreLookingFor: [
        'We are seeking a motivated Social Media Specialist to effectively engage with targeted virtual communities and network users. Our objective is to achieve exceptional customer engagement, foster intimacy, drive website traffic, and increase revenue through strategic utilization of the social media marketing roadmap. The ideal candidate should possess a comprehensive understanding of various social media platforms and how to optimize content for maximum engagement',
      ],

      whatYouWillBeDoing: [
        'Build and execute social media strategy through competitive research, platform determination, benchmarking, messaging and audience identification.',
        'Generate, edit, publish and share daily content (original text, images, video or HTML) that builds meaningful connections and encourages community members to take action',
        'Set up and optimize company pages within each platform to increase the visibility of company’s social content',
        'Moderate all user-generated content in line with the moderation policy for each community',
        'Continuously improve by capturing and analyzing the appropriate social data/metrics, insights and best practices, and then acting on the information',
        'Collaborate with other departments (customer relations, sales etc) to manage reputation, identify key players and coordinate actions',
      ],

      bonusPointsFamiliarity: [
        'Proven working experience in social media marketing or as a Digital Media Specialist',
        'Excellent consulting, writing, editing (photo/video/text), presentation and communication skills',
        'Demonstrable social networking experience and social analytics tools knowledge.',
        'Adequate knowledge of web design, web development, CRO and SEO',
        'Knowledge of online marketing and good understanding of major marketing channels',
        'Positive attitude, detail and customer oriented with good multitasking and organizational ability',
        'BS in Communications, Marketing, Business, New Media or Public Relations',
        'Fluent in English and Arabic (French and Armenian are a plus)',
      ],

      educationalRequirement:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',

      salary: [
        'Salary:  18,000 to 35,000 LBP (Depends on Skill and Experience)',
        'Salary Review: Yearly',
      ],

      workingHours: ['8 AM – 5 PM'],

      workingDays: ['Weekly: 5 days.', 'Weekend: Friday.Saturday'],

      perksAndBenefits: ['Monthly Voice and Data Allowance', 'Free Days Off'],

      applicationProcess: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Nullam dictum ligula a gravida porta.',
        'Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.',
        'Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.',
        'Nulla non enim eu quam rutrum dictum in non urna.',
      ],

      jobSummary: [
        {
          icon: '/assets/svgs/icn-job-location.svg',
          mainTitle: 'Location',
          subTitle: 'Beirut, Banani11',
        },
        {
          icon: '/assets/svgs/icn-job-briefcase.svg',
          mainTitle: 'Job Type',
          subTitle: 'Full Time',
        },
        {
          icon: '/assets/svgs/icn-job-calendar.svg',
          mainTitle: 'Date posted',
          subTitle: 'posted 1 month ago',
        },
        {
          icon: '/assets/svgs/icn-job-book.svg',
          mainTitle: 'Experience',
          subTitle: 'Experience: 1-3 year',
        },
      ],
    },

    {
      positionId: 'brach-customer-service-representative',
      positionTitle: 'Branch Customer Service Representative',
      whoWeAreLookingFor: [
        'We are looking for a Mojo branch customer-oriented service representative that will act as a liaison, provide product/services information, answer questions, and resolve any emerging problems that our customer accounts might face with accuracy and efficiency. Your target is to ensure excellent service standards, respond efficiently to customer inquiries and maintain high customer satisfaction.',
      ],

      whatYouWillBeDoing: [
        'Identify and assess customers’ needs to achieve satisfaction',
        'Produce sales prospects',
        'Establish long-lasting connections and trust with customer accounts through transparent and active dialogue',
        'Use the proper techniques and instruments to provide information that is accurate, valid, and comprehensive',
        'Achieve operational quotas and personal/customer service team sales targets',
        'Duis pretium sapien vitae felis tincidunt lobortis vel et urna',
        'Respond to client complaints, offer suitable alternatives and solutions within the allotted time frames, and follow up to assure resolution',
        'Maintain client interaction logs, handle customer accounts, and file paperwork',
        'Adhere to communication protocols, rules, and regulations',
        'Take the extra mile to engage customers',
      ],

      bonusPointsFamiliarity: [
        'Proven customer support experience or experience as a Client Service Representative',
        'Track record of over-achieving quota',
        'Familiarity with CRM systems and practices',
        'Customer orientation and ability to adapt/respond to different types of characters',
        'Excellent communication and presentation skills',
        'Ability to multi-task, prioritize, and manage time effectively',
        'High school diploma or a vocational degree in a related field',
        'Fluent in English and Arabic (French and Armenian are a plus)',
      ],

      educationalRequirement:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',

      salary: [
        'Salary:  18,000 to 35,000 LBP (Depends on Skill and Experience)',
        'Salary Review: Yearly',
      ],

      workingHours: ['8 AM – 5 PM'],

      workingDays: ['Weekly: 5 days.', 'Weekend: Friday.Saturday'],

      perksAndBenefits: ['Monthly Voice and Data Allowance', 'Free Days Off'],

      applicationProcess: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Nullam dictum ligula a gravida porta.',
        'Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.',
        'Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.',
        'Nulla non enim eu quam rutrum dictum in non urna.',
      ],

      jobSummary: [
        {
          icon: '/assets/svgs/icn-job-location.svg',
          mainTitle: 'Location',
          subTitle: 'Beirut, Banani11',
        },
        {
          icon: '/assets/svgs/icn-job-briefcase.svg',
          mainTitle: 'Job Type',
          subTitle: 'Full Time',
        },
        {
          icon: '/assets/svgs/icn-job-calendar.svg',
          mainTitle: 'Date posted',
          subTitle: 'posted 1 month ago',
        },
        {
          icon: '/assets/svgs/icn-job-book.svg',
          mainTitle: 'Experience',
          subTitle: 'Experience: 1-3 year',
        },
      ],
    },

    {
      positionId: 'marketing-and-communication-specialist',
      positionTitle: 'Marketing and Communication Specialist',
      whoWeAreLookingFor: [
        "We are looking for an enthusiastic Marketing and Communications Specialist to manage our external and internal communications. You will promote a positive public image and control the dissemination of information on our company’s behalf. Phenomenal communication and copywriting skills make a strong communications specialist. Experience in corporate communications and project management are important qualities too",
      ],

      whatYouWillBeDoing: [
        'Develop effective corporate communication strategies',
        'Manage internal communications (memos, newsletters etc.)',
        'Draft content (e.g. press releases) for mass media or company website',
        'Organize initiatives and plan events or press conferences',
        'Liaise with media and handle requests for interviews, statements etc',
        'Foster relationships with advocates and key persons',
        'Collaborate with marketing professionals to produce copy for advertisements or articles',
        'Perform “damage control” in cases of bad publicity',
        'Facilitate the resolution of disputes with the public or external vendors',
        'Assist in communication of strategies or messages from senior leadership',
      ],

      bonusPointsFamiliarity: [
        'Previous experience in a customer support role',
        'Track record of over-achieving quota',
        'Strong phone and verbal communication skills along with active listening',
        'Familiarity with CRM systems and practices',
        'Customer focus and adaptability to different personality types',
        'Ability to multi-task, set priorities and manage time effectively',
        'High school degree or a vocational degree in a related field',
        'Fluent in English and Arabic (French and Armenian are a plus)',
      ],

      educationalRequirement:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going',

      salary: [
        'Salary:  18,000 to 35,000 LBP (Depends on Skill and Experience)',
        'Salary Review: Yearly',
      ],

      workingHours: ['8 AM – 5 PM'],

      workingDays: ['Weekly: 5 days.', 'Weekend: Friday.Saturday'],

      perksAndBenefits: ['Monthly Voice and Data Allowance', 'Free Days Off'],

      applicationProcess: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Nullam dictum ligula a gravida porta.',
        'Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.',
        'Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.',
        'Nulla non enim eu quam rutrum dictum in non urna.',
      ],

      jobSummary: [
        {
          icon: '/assets/svgs/icn-job-location.svg',
          mainTitle: 'Location',
          subTitle: 'Beirut, Banani11',
        },
        {
          icon: '/assets/svgs/icn-job-briefcase.svg',
          mainTitle: 'Job Type',
          subTitle: 'Full Time',
        },
        {
          icon: '/assets/svgs/icn-job-calendar.svg',
          mainTitle: 'Date posted',
          subTitle: 'posted 1 month ago',
        },
        {
          icon: '/assets/svgs/icn-job-book.svg',
          mainTitle: 'Experience',
          subTitle: 'Experience: 1-3 year',
        },
      ],
    },
  ];
}

import { Component } from '@angular/core';
import { TeamMembers } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {


  teamMembers: TeamMembers[] = [
    {memberImg: '/assets/images/deborah-img.jpg', memberName: 'Deborah McConway', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'https://x.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'https://tiktok.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'https://linkedin.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'mailto:mojo0@gmail.com'}
    ]},

    {memberImg: '/assets/images/saqib-img.png', memberName: 'Saqib Nazir', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'https://x.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'https://tiktok.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'https://linkedin.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'mailto:mojo0@gmail.com'}
    ]},

    {memberImg: '', memberName: 'Deborah McConway', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'https://x.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'https://tiktok.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'https://linkedin.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'mailto:mojo0@gmail.com'}
    ]},

    {memberImg: '', memberName: 'Deborah McConway', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'https://x.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'https://tiktok.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'https://linkedin.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'mailto:mojo0@gmail.com'}
    ]},

    {memberImg: '', memberName: 'Saqib Nazir', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'https://x.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'https://tiktok.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'https://linkedin.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'mailto:mojo0@gmail.com'}
    ]},

    {memberImg: '', memberName: 'Deborah McConway', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'https://x.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'https://tiktok.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'https://linkedin.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'mailto:mojo0@gmail.com'}
    ]},
   
  ]
}


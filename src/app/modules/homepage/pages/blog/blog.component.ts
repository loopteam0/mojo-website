import { Component } from '@angular/core';
import { HomepageHero, NewsCards, TeamMembers } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

   // Making hero info available to edit later in CMS by giving it a model
   blogpageHero: HomepageHero[] = [
    {tagText: 'Mojoer', mainTitle: 'Get updates with Mojo', subTitle: "Mojo blog tells you all you need to know about the financial landsape of Lebanon and the world."}
  ]

  // Making promo banner info available to edit later in CMS by giving it a model
  promoBanner: HomepageHero[] = [
    {tagText: 'Mojoer', mainTitle: 'Get updates with Mojo', subTitle: "Mojo blog tells you all you need to know about the financial landsape of Lebanon and the world."}
  ]

  tabSelected: string = 'tab1';

  setActiveTab(tab: string) {
    this.tabSelected = tab;
  }

  teamMembers: TeamMembers[] = [
    {memberImg: '/assets/images/blog-image.png', memberName: 'Deborah McConway', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'google.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'google.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'google.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'google.com'}
    ]},

    {memberImg: '/assets/images/blog-image.png', memberName: 'Saqib Nazir', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'google.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'google.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'google.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'google.com'}
    ]},

    {memberImg: '', memberName: 'Deborah McConway', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'google.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'google.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'google.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'google.com'}
    ]},

    {memberImg: '', memberName: 'Deborah McConway', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'google.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'google.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'google.com'},
      {background: 'rgba(69, 0, 255, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(98%) sepia(100%) saturate(0%) hue-rotate(121deg) brightness(116%) contrast(100%);', iconLink: 'google.com'}
    ]},

    {memberImg: '', memberName: 'Saqib Nazir', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'google.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'google.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'google.com'},
      {background: 'rgba(105, 224, 122, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(10%) sepia(78%) saturate(5885%) hue-rotate(258deg) brightness(116%) contrast(145%);', iconLink: 'google.com'}
    ]},

    {memberImg: '', memberName: 'Deborah McConway', memberRole: 'Founder', iconContainerBg: 'rgba(69, 0, 255, 1)', 
    iconContainer: [
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-twitter-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'google.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-tiktok-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'google.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-linkedin-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'google.com'},
      {background: 'rgba(255, 140, 66, 1)', icon: '/assets/svgs/icn-email-outline.svg', iconColor: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(100deg) brightness(102%) contrast(101%);', iconLink: 'google.com'}
    ]},

    
   
  ]

  newscards: NewsCards[] = [
    {newsImg: '/assets/images/blog-image.png', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'Joanna Wellick', newsDate: 'June 28, 2018', newsTitle: 'Integer Maecenas Eget Viverra si importune', newsSubTitle: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'},
    {newsImg: '/assets/images/blog-image.png', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'Joanna Wellick', newsDate: 'June 28, 2018', newsTitle: 'Integer Maecenas Eget Viverra si importune', newsSubTitle: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'},
    {newsImg: '/assets/images/blog-image.png', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'Joanna Wellick', newsDate: 'June 28, 2018', newsTitle: 'Integer Maecenas Eget Viverra si importune', newsSubTitle: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'},
    {newsImg: '/assets/images/blog-image.png', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'Joanna Wellick', newsDate: 'June 28, 2018', newsTitle: 'Integer Maecenas Eget Viverra si importune', newsSubTitle: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'},
    {newsImg: '/assets/images/blog-image.png', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'Joanna Wellick', newsDate: 'June 28, 2018', newsTitle: 'Integer Maecenas Eget Viverra si importune', newsSubTitle: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'},
    {newsImg: '/assets/images/blog-image.png', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'Joanna Wellick', newsDate: 'June 28, 2018', newsTitle: 'Integer Maecenas Eget Viverra si importune', newsSubTitle: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'},
    {newsImg: '/assets/images/blog-image.png', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'Joanna Wellick', newsDate: 'June 28, 2018', newsTitle: 'Integer Maecenas Eget Viverra si importune', newsSubTitle: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'},
    {newsImg: '/assets/images/blog-image.png', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'Joanna Wellick', newsDate: 'June 28, 2018', newsTitle: 'Integer Maecenas Eget Viverra si importune', newsSubTitle: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'},
    {newsImg: '/assets/images/blog-image.png', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'Joanna Wellick', newsDate: 'June 28, 2018', newsTitle: 'Integer Maecenas Eget Viverra si importune', newsSubTitle: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'},

  ]
  
}

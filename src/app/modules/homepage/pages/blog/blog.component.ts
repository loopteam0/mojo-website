import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageHero, NewsCards, TeamMembers } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {


  constructor(private router : Router){}

  blogDetailsPage(){
    this.router.navigate(['blog/blog-detail'])
  }

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



  newscards: NewsCards[] = [
    {newsImg: '/assets/images/news-img1.png', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'L’Orient Today', newsDate: 'June 03, 2023', newsTitle: 'Digital wallets, a new way to bypass banks in Lebanon?', newsSubTitle: 'Since mid-May, a small revolution has been taking place in Lebanon’s digital wallet market, as the first steps towards synergy among...', newsLink: 'https://today.lorientlejour.com/article/1339336/digital-wallets-a-new-way-to-bypass-banks-in-lebanon.html'},
    {newsImg: '/assets/images/news-img2.jpeg', writerImg: '/assets/images/blog-writer.jpeg', writerName: 'Lebanese  University', newsDate: 'Sept 14, 2023', newsTitle: 'Health Insurance Premiums for Students for Fall 2023', newsSubTitle: 'Students enrolled in any university in Lebanon, are required by law to be covered by health insurance.', newsLink: 'https://today.lorientlejour.com/article/1339336/digital-wallets-a-new-way-to-bypass-banks-in-lebanon.html'},
    
  ]
  
}

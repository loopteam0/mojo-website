import { Component } from '@angular/core';
import { HomepageHero, NewsCards, TeamMembers } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

   // Making hero info available to edit later in CMS by giving it a model
   blogpageHero: HomepageHero[] = [
    {tagText: 'Mojo Media', mainTitle: 'Integer Maecenas Eget Viverra si importune', subTitle: ""}
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

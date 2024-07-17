import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Image, PageResponse } from 'src/app/models/data.models';
import { AdvantageCard, HomepageHero, MojoForYou } from 'src/app/models/homepage.models';
import { DataService } from 'src/services/data.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  PageData!: PageResponse;
  advantageCard: AdvantageCard[] = [];
  images: Image[] | undefined;
  aboutMojo: HomepageHero[] = [];
  mojoForYou: MojoForYou[] = [];
  points: string[] | undefined = [];


  constructor(private router: Router, private dataService: DataService){}

  toAboutUs(){
    this.router.navigate(['/about-us']);
  }

  ngOnInit(): void {
    this.renderPageDetails('Landing Page');

  }

  renderPageDetails(pageType: string) {
    this.dataService
      .renderPage(pageType)
      .subscribe((response: PageResponse) => {
        this.PageData = response;
        console.log('PageData: ', this.PageData);


        this.images = response.result.pageSection.find(
          (section) => section.sectionType === 'Hero Section'
        )?.imagesObj;

        console.log('Carousel Images: ', this.images);
        // this.jobPosts = response.result.pageSection[4].jobPosts[0];

        this.points = response.result.pageSection.find(
          (section) => section.sectionType === 'Notes to Mojoers'
        )?.points;
        
        this.advantageCard = [
          {
            icon: '/assets/svgs/icn-clock-blue.svg',
            title: response.result.pageSection.find(
              (section) => section.sectionType === 'Why Choose Us'
            )?.titleDescription[0].title,
            subtitle: response.result.pageSection.find(
              (section) => section.sectionType === 'Why Choose Us'
            )?.titleDescription[0].description,
          },
          {
            icon: '/assets/svgs/icn-credit-card-blue.svg',
            title: response.result.pageSection.find(
              (section) => section.sectionType === 'Why Choose Us'
            )?.titleDescription[1].title,
            subtitle: response.result.pageSection.find(
              (section) => section.sectionType === 'Why Choose Us'
            )?.titleDescription[1].description,
          },
          {
            icon: '/assets/svgs/icn-secure-badge-blue.svg',
            title: response.result.pageSection.find(
              (section) => section.sectionType === 'Why Choose Us'
            )?.titleDescription[2].title,
            subtitle: response.result.pageSection.find(
              (section) => section.sectionType === 'Why Choose Us'
            )?.titleDescription[2].description,
          },
        ];

        this.aboutMojo = [
          {
            tagText: '',
            mainTitle: response.result.pageSection.find(
              (section) => section.sectionType === 'About Mojo'
            )?.header,
            subTitle: response.result.pageSection.find(
              (section) => section.sectionType === 'About Mojo'
            )?.subtext,
          },
        ]

        const pointOne = response.result.pageSection.find(
          (section) => section.sectionType === 'Notes to Mojoers'
        )?.points[0];

        this.mojoForYou = [
          {
            image: '/assets/images/mojo-for you.png',
            subheader: 'Notes to our mojoers',
            mainHeader: response.result.pageSection.find(
              (section) => section.sectionType === 'Notes to Mojoers'
            )?.title,
            points: this.points
          },
        ]
      });

      console.log(this.points)
  }


}

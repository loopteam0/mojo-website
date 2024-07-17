import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageResponse } from 'src/app/models/data.models';
import { GeneralFeatures } from 'src/app/models/homepage.models';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-general-features',
  templateUrl: './general-features.component.html',
  styleUrls: ['./general-features.component.scss']
})
export class GeneralFeaturesComponent {

  PageData!: PageResponse;
  featuresColumn1: GeneralFeatures[] = [];

  featuresColumn2: GeneralFeatures[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.renderPageDetails('Landing Page');
  }

  renderPageDetails(pageType: string) {
    this.dataService
      .renderPage(pageType)
      .subscribe((response: PageResponse) => {
        this.PageData = response;
        console.log(this.PageData);

        this.featuresColumn1 = [
          {
            containerColor: 'rgba(212, 217, 245, 1)',
            title: response.result.pageSection.find(
              (section) => section.sectionType === 'App Features'
            )?.titleDescription[0].title,
            subtitle: response.result.pageSection.find(
              (section) => section.sectionType === 'App Features'
            )?.titleDescription[0].description,
            icon: '/assets/svgs/icn-newspaper.svg',
          },
          {
            containerColor: 'rgba(255, 223, 205, 1)',
            title: response.result.pageSection.find(
              (section) => section.sectionType === 'App Features'
            )?.titleDescription[1].title,
            subtitle: response.result.pageSection.find(
              (section) => section.sectionType === 'App Features'
            )?.titleDescription[1].description,
            icon: '/assets/svgs/icn-stopwatch-orange.svg',
          },
        ];

        this.featuresColumn2 = [
          {
            containerColor: 'rgba(229, 255, 235, 1)',
            title: response.result.pageSection.find(
              (section) => section.sectionType === 'App Features'
            )?.titleDescription[2].title,
            subtitle: response.result.pageSection.find(
              (section) => section.sectionType === 'App Features'
            )?.titleDescription[2].description,
            icon: '/assets/svgs/icn-secure-badge-green.svg',
          },
          {
            containerColor: 'rgba(253, 225, 255, 1)',
            title: response.result.pageSection.find(
              (section) => section.sectionType === 'App Features'
            )?.titleDescription[3].title,
            subtitle: response.result.pageSection.find(
              (section) => section.sectionType === 'App Features'
            )?.titleDescription[3].description,
            icon: '/assets/svgs/icn-globe-pink.svg',
          },
        ];
      });
  }
}

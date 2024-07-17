import { Component } from '@angular/core';
import { PageResponse } from 'src/app/models/data.models';
import { BecomeAMojoer } from 'src/app/models/homepage.models';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-become-a-mojoer',
  templateUrl: './become-a-mojoer.component.html',
  styleUrls: ['./become-a-mojoer.component.scss'],
})
export class BecomeAMojoerComponent {
  becomeAMojoer: BecomeAMojoer[] = [
    {
      Steps: [{
        
          firstStep: [
            {
              mainHeader: 'Download The Mojo App',
              subHeader: 'Download on IOS and Android.',
              stepTagTxt: 'First Step',
            },
          ],

          secondStep: [
            {
              mainHeader: 'Complete account profile',
              subHeader: 'Tell us about you so we can personalise your experience.',
              stepTagTxt: 'Next Step',
            },
          ],

          thirdStep: [
            {
              mainHeader: 'You are now a Mojoer',
              subHeader: 'You can pay and receive funds very with Mojo now',
              stepTagTxt: 'Final Step',
            },
          ],}
        
      ],
    },
    // {secondStep: [mainHeader: '', subHeader: '', stepTagTxt: '']},
    // {thirdStep: [mainHeader: '', subHeader: '', stepTagTxt: '']},
  ];

  
  PageData!: PageResponse;

  constructor(private dataService: DataService){}

  ngOnInit() {
    this.renderPageDetails('Landing Page');
  }

  renderPageDetails(pageType: string) {
    this.dataService
      .renderPage(pageType)
      .subscribe((response: PageResponse) => {
        this.PageData = response;
        console.log(this.PageData);
      });
  }
}

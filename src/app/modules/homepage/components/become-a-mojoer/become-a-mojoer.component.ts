import { Component } from '@angular/core';
import { BecomeAMojoer } from 'src/app/models/homepage.models';

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
              stepTagTxt: 'Second Step',
            },
          ],

          thirdStep: [
            {
              mainHeader: 'You are now a Mojoer',
              subHeader: 'You can pay and receive funds very with Mojo now',
              stepTagTxt: 'Third Step',
            },
          ],}
        
      ],
    },
    // {secondStep: [mainHeader: '', subHeader: '', stepTagTxt: '']},
    // {thirdStep: [mainHeader: '', subHeader: '', stepTagTxt: '']},
  ];
}

import { Component } from '@angular/core';
import { MojoForYou, PaymentLikeNeverBefore } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  currencySupport: MojoForYou[] = [
    { image: '/assets/images/currency-support.png', subheader: 'We currently support', mainHeader: '2 currencies', points: ['Fresh Lebanese Pounds', 'Fresh United States Dollars',] }
  ]

  paymentLikeNeverBefore: PaymentLikeNeverBefore[] = [
    { mainHeader: 'Payments like never before', subTitle: "Why paying with Mojo is everyones choice.", outerBg: 'rgba(241, 241, 255, 1)', cardInfoOne: [
      { cardTitle: 'Payments to over 100+ companies', cardSubTitle:'Lorem Ipsum', innerBg: 'rgba(241, 241, 255, 1)'},
      { cardTitle:'Use Mojo anywhere in the world', cardSubTitle:'Lorem Ipsum',  innerBg: 'rgba(255, 225, 205, 1)'}
    ] }
  ]
}

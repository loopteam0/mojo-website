import { Component } from '@angular/core';
import { AdvantageCard } from 'src/app/models/homepage.models';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {


  // Populating "Our Advantages" cards
  advantageCard : AdvantageCard[] = [
    {icon: '/assets/svgs/icn-clock-blue.svg', title: 'Quick Transactions', subtitle: 'You can pay for items very quickly.'},
    {icon: '/assets/svgs/icn-credit-card-blue.svg', title: 'Easy Payment', subtitle: 'Pay anything very easily.'},
    {icon: '/assets/svgs/icn-secure-badge-blue.svg', title: 'Trusted and Secure', subtitle: 'Your account is always secure.'},
  ]

}

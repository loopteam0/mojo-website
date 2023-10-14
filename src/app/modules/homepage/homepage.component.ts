import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvantageCard, HomepageHero, MojoForYou } from 'src/app/models/homepage.models';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {


  constructor(private router: Router){}

  toAboutUs(){
    this.router.navigate(['/about-us']);
  }

  // Populating "Our Advantages" cards
  advantageCard : AdvantageCard[] = [
    {icon: '/assets/svgs/icn-clock-blue.svg', title: 'Quick Transactions', subtitle: 'You can pay for items very quickly.'},
    {icon: '/assets/svgs/icn-credit-card-blue.svg', title: 'Easy Payment', subtitle: 'No more endless counting of banknotes.'},
    {icon: '/assets/svgs/icn-secure-badge-blue.svg', title: 'Trusted and Secure', subtitle: 'Your account is always secure.'},
  ]


  // Populating "Mojo is for you" information
  mojoForYou: MojoForYou[] = [
    {image: '/assets/images/mojo-for you.png', subheader: 'Notes to our mojoers', mainHeader: 'Mojo is for you', points: ['Mojo supports fresh Lebanese Pounds and fresh US Dollars', 'Mojo is tailored to your needs', 'Mojo customer service supports you all the way.']}
  ]

  // About Mojo
  aboutMojo: HomepageHero[] = [
    {tagText: '', mainTitle: 'About Mojo', subTitle: 'Mojo is designed with you in mind. Our mission is to provide a secure, efficient, flexible, and affordable wallet for every citizen, making daily transactions—from buying groceries to settling utility bills—a seamless experience.'}
  ]

}

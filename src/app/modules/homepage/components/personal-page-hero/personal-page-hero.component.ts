import { Component } from '@angular/core';
import { HomepageHero } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-personal-page-hero',
  templateUrl: './personal-page-hero.component.html',
  styleUrls: ['./personal-page-hero.component.scss']
})
export class PersonalPageHeroComponent {


  // Making hero info available to edit later in CMS by giving it a model
  homepageHero: HomepageHero[] = [
    {tagText: 'Mojo', mainTitle: 'The Wallet you can trust.', subTitle: "Happy to have you as a Mojoer. Some marketing lines can do over to make this cool."}
  ]

}

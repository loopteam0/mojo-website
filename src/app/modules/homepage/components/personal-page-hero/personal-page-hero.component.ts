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
    {tagText: 'Mojo', mainTitle: 'The mobile wallet you can trust. ', subTitle: "Welcome to the Mojo Family"}
  ]

}

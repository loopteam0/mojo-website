import { Component } from '@angular/core';
import { HomepageHero } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-business-page-hero',
  templateUrl: './business-page-hero.component.html',
  styleUrls: ['./business-page-hero.component.scss']
})
export class BusinessPageHeroComponent {


  // Making hero info available to edit later in CMS by giving it a model
  homepageHero: HomepageHero[] = [
    {tagText: 'Mojo', mainTitle: 'Business is best with Mojo', subTitle: "Mojo Merchants App has all you need to receive payments."}
  ]

}

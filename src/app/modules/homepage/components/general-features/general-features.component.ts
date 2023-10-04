import { Component } from '@angular/core';
import { GeneralFeatures } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-general-features',
  templateUrl: './general-features.component.html',
  styleUrls: ['./general-features.component.scss']
})
export class GeneralFeaturesComponent {

  featuresColumn1: GeneralFeatures[] = [
    {containerColor: 'rgba(212, 217, 245, 1)', title: 'Easy registration', subtitle: 'Mojoers go through a simple, online registration process.', icon: '/assets/svgs/icn-newspaper.svg'},
    {containerColor: 'rgba(255, 223, 205, 1)', title: 'Fastest Payments', subtitle: 'Payments are reflected in near real time.', icon: '/assets/svgs/icn-stopwatch-orange.svg'},
  ];

  featuresColumn2: GeneralFeatures[] = [
    {containerColor: 'rgba(229, 255, 235, 1)', title: 'Advanced Security', subtitle: 'Mojo maintains a high security standard 24/7.', icon: '/assets/svgs/icn-secure-badge-green.svg'},
    {containerColor: 'rgba(253, 225, 255, 1)', title: 'International Transfers', subtitle: "Send money to Mojoers across the world. #ComingSoon", icon: '/assets/svgs/icn-globe-pink.svg'},
  ];
}

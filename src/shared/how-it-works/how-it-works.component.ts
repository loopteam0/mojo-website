import { Component } from '@angular/core';
import { StepsVideos } from 'src/app/models/homepage.models';
import { ScrollService } from 'src/services/scroll.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent {


  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  howItWorks : StepsVideos[] = [
    {title: 'Load your Wallet', description: 'You can easily fund your account', videoLink: 'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z'},
    {title: 'Send Money', description: 'Learn to transfer your funds.', videoLink: 'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z'},
    {title: 'Make Payments', description: 'You can pay and receive funds very quickly.', videoLink: 'https://www.youtube.com/embed/i3rhDtDL31I?si=ERN1zM_m1vl78V8z'}
  ]

  constructor(private scrollService: ScrollService,private sanitizer: DomSanitizer) {
    this.scrollService.scrollToClass.subscribe(className => {
      const elements = document.getElementsByClassName(className);
      if (elements.length > 0) {
        const firstElement = elements[0] as HTMLElement;
        firstElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionContent } from 'src/app/models/homepage.models';
import { ScrollService } from 'src/services/scroll.service';

export interface Navbar {
  tileHeader: string;
  links: Array<{
    linkTitle: string;
    routerLink: string;
    sectionId: string;
  }>;
  isExpanded: boolean;
  expandedIcon: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private scrollService: ScrollService, private router: Router) {}

  onNavLinkClick(sectionId: string) {
    this.scrollService.scrollToClass.emit(sectionId);
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // toggleAccordion(index: number) {
  //   this.mobileNavContent[index].isExpanded = !this.mobileNavContent[index].isExpanded
  // }

  toggleAccordion(index: number) {
    for (let i = 0; i < this.mobileNavContent.length; i++) {
      if (i === index) {
        // Toggle the clicked item
        this.mobileNavContent[i].isExpanded =
          !this.mobileNavContent[i].isExpanded;
      } else {
        // Close other items
        this.mobileNavContent[i].isExpanded = false;
      }
    }
  }

  closeNav(sectionId: string) {
    this.isMenuOpen = false;
  
    if (!this.isMenuOpen) {
      this.scrollService.scrollToClass.emit(sectionId);
    }
  }

  closeNavOnly(){
    this.isMenuOpen = false;
  }
  

  // Generating accordion tiles

  mobileNavContent: Navbar[] = [
    {
      tileHeader: 'Personal',
      links: [
        { linkTitle: 'Get a  wallet', routerLink: '/personal', sectionId: 'entire-hero-section-personal' },
        { linkTitle: 'Currencies', routerLink: '/personal', sectionId: 'currency-support-section' },
        { linkTitle: 'Making Payments', routerLink: '/personal', sectionId: 'mojoer-steps-section' },
        {
          linkTitle: 'Locate - Mojo Risin’',
          routerLink: '/personal/locate-mojo',
          sectionId: ''
        },
        { linkTitle: 'Discover Mojo', routerLink: '/personal/about-us', sectionId: '' },
      ],
      isExpanded: false,
      expandedIcon: '/assets/svgs/expand-icn-nav.svg',
    },

    {
      tileHeader: 'Business',
      links: [
        { linkTitle: 'Mojo Business', routerLink: '/business', sectionId: '' },
        { linkTitle: 'Mojo Agents', routerLink: '/business/agents', sectionId: '' },
        { linkTitle: 'Currencies', routerLink: '/business', sectionId: 'currency-support-section' },
        { linkTitle: 'Settlements', routerLink: '/business', sectionId: 'quick-settlements' },

      ],
      isExpanded: false,
      expandedIcon: '/assets/svgs/expand-icn-nav.svg',
    },

    {
      tileHeader: 'About Mojo',
      links: [
        { linkTitle: 'About Us', routerLink: '/about-us', sectionId: '' },
        { linkTitle: 'Career', routerLink: '/about-us/careers', sectionId: '' },
        { linkTitle: "Locate - Mojo Risin'", routerLink: '/about-us/locate-mojo', sectionId: ''  },
        { linkTitle: 'Terms and Conditions', routerLink: '/about-us/terms-and-conditions', sectionId: '' },
        { linkTitle: 'Privacy Policy', routerLink: '/about-us/privacy-policy', sectionId: '' },
      ],
      isExpanded: false,
      expandedIcon: '/assets/svgs/expand-icn-nav.svg',
    },

    // {
    //   tileHeader: 'Media and Press',
    //   links: [

    //   ],
    //   isExpanded: false,
    //   expandedIcon: '',
    // },
  ];
}

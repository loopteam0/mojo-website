import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionContent } from 'src/app/models/homepage.models';
import { ScrollService } from 'src/services/scroll.service';

export interface Navbar {
  tileHeader: string;
  links: Array<{
    linkTitle: Array<string>;
    routerLink: Array<string>;
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

  closeNav(){
    this.toggleMenu();
  }

  // Generating accordion tiles

  mobileNavContent: Navbar[] = [
    {
      tileHeader: 'Personal',
      links: [
        { linkTitle: ['Get a  wallet'], routerLink: [''] },
        { linkTitle: ['Currencies'], routerLink: [''] },
        { linkTitle: ['Making Payments'], routerLink: [''] },
        {
          linkTitle: ['Locate - Mojo Risin’'],
          routerLink: ['/personal/locate-mojo'],
        },
        { linkTitle: ['Discover Mojo'], routerLink: ['/personal/about-us'] },
      ],
      isExpanded: false,
      expandedIcon: '/assets/svgs/expand-icn-nav.svg',
    },

    {
      tileHeader: 'Business',
      links: [
        { linkTitle: ['Mojo Agents'], routerLink: ['/business/agents'] },
        { linkTitle: ['Currencies'], routerLink: [''] },
        { linkTitle: ['Settlements'], routerLink: [''] },

      ],
      isExpanded: false,
      expandedIcon: '/assets/svgs/expand-icn-nav.svg',
    },

    {
      tileHeader: 'About Mojo',
      links: [
        { linkTitle: ['Career'], routerLink: ['/about-us/careers'] },
        { linkTitle: ["Locate - Mojo Risin'"], routerLink: ['/about-us/locate-mojo'] },
        { linkTitle: ['Terms and Conditions'], routerLink: ['/about-us/terms-and-conditions'] },
        { linkTitle: ['Privacy Policy'], routerLink: ['/about-us/privacy-policy'] },
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionContent } from 'src/app/models/homepage.models';
import { ScrollService } from 'src/services/scroll.service';

export interface Navbar{
  tileHeader: string;
  links: Array<string>;
  routerLink: Array<string>;
  isExpanded: boolean;
  expandedIcon: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(private scrollService: ScrollService, private router: Router) {}
  
  onNavLinkClick(sectionId: string) {
    this.scrollService.scrollToClass.emit(sectionId);
  }

  isMenuOpen = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleAccordion(index: number) {
    this.mobileNavContent[index].isExpanded = !this.mobileNavContent[index].isExpanded
  }

   // Generating accordion tiles

   mobileNavContent: Navbar[] = [
    {tileHeader: 'Personal', links: ['Get a wallet', 'Currencies', 'Making Payments', "Locate - Mojo Risin'", 'Discover Mojo'], routerLink: ['', '', '', '', ''], isExpanded: false, expandedIcon: '/assets/svgs/expand-icn-nav.svg'},
    {tileHeader: 'Business', links: ['Mojo Agent', 'Currencies', 'Settlement'], routerLink: ['', '', '', '', ''], isExpanded: false, expandedIcon: '/assets/svgs/expand-icn-nav.svg'},
    {tileHeader: 'About Mojo', links: ['', '', '', '', ''], routerLink: ['', '', '', '', ''], isExpanded: false, expandedIcon: '/assets/svgs/expand-icn-nav.svg'},
    {tileHeader: 'Media and Press', links: ['', '', '', '', ''], routerLink: ['', '', '', '', ''], isExpanded: false, expandedIcon: ''},
  ]

  
}

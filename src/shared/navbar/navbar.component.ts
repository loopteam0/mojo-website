import { Component } from '@angular/core';
import { ScrollService } from 'src/services/scroll.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(private scrollService: ScrollService) {}
  
  onNavLinkClick(sectionId: string) {
    this.scrollService.scrollToClass.emit(sectionId);
  }
  
}

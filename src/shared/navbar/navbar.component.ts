import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/services/scroll.service';


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

  // navigateToFaq() {
  //   this.router.navigate(['/personal/faq']);
  // }
  
}

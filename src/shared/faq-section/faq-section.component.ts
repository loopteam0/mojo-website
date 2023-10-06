import { Component, Input } from '@angular/core';
import { AccordionContent } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent {

  // expanded : boolean = false;
 

  toggleAccordion(index: number) {
    // this.expanded = !this.expanded;
    this.accordionContent[index].isExpanded = !this.accordionContent[index].isExpanded
  }

  
   // Generating accordion tiles

   accordionContent: AccordionContent[] = [
    { title: 'Is Mojo the best mobile wallet?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'How many Mojo accounts can I create?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'How many Mojo accounts can I create?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'Is KacyArts the best design company?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'How many Mojo accounts can I create?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'Is KacyArts the best design company?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },

   

  ]
}

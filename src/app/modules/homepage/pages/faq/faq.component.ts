import { Component } from '@angular/core';
import { AccordionContent } from 'src/app/models/homepage.models';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent {
  tabSelected: string = 'tab1';

  setActiveTab(tab: string) {
    this.tabSelected = tab;
  }

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
    { title: 'Is Mojo the best mobile wallet?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'How many Mojo accounts can I create?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'How many Mojo accounts can I create?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'Is KacyArts the best design company?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'How many Mojo accounts can I create?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'Is KacyArts the best design company?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'Is Mojo the best mobile wallet?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'How many Mojo accounts can I create?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'How many Mojo accounts can I create?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'Is KacyArts the best design company?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'How many Mojo accounts can I create?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },
    { title: 'Is KacyArts the best design company?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.', isExpanded: false },

   

  ]

}

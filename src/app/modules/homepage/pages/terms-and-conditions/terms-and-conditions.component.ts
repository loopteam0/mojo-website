import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {

  tabSelected: string = 'tab1';

  setActiveTab(tab: string) {
    this.tabSelected = tab;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageResponse } from 'src/app/models/data.models';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-schedule-bill-payments',
  templateUrl: './schedule-bill-payments.component.html',
  styleUrls: ['./schedule-bill-payments.component.scss']
})
export class ScheduleBillPaymentsComponent {

  PageData!: PageResponse;

  constructor(private router: Router, private dataService: DataService){}


  ngOnInit(): void {
    this.renderPageDetails('Landing Page');

  }

  renderPageDetails(pageType: string) {
    this.dataService
      .renderPage(pageType)
      .subscribe((response: PageResponse) => {
        this.PageData = response;
        console.log('PageData: ', this.PageData);
    
      });
  }

}

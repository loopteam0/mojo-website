
// Shared Module contains global components like the navbar
// and the footer components.  

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MojoMerchantCtaComponent } from './mojo-merchant-cta/mojo-merchant-cta.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ScheduleBillPaymentsComponent } from './schedule-bill-payments/schedule-bill-payments.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MojoMerchantCtaComponent,
    NewsletterComponent,
    ScheduleBillPaymentsComponent,
    ContactUsComponent,
    HowItWorksComponent,
    FaqSectionComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NavbarComponent,
    FooterComponent,
    MojoMerchantCtaComponent,
    NewsletterComponent,
    ScheduleBillPaymentsComponent,
    ContactUsComponent,
    HowItWorksComponent,
    FaqSectionComponent,
    
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: 'YOUR_RECAPTCHA_SITE_KEY' }
  ],
})
export class SharedModule { }


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


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MojoMerchantCtaComponent,
    NewsletterComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NavbarComponent,
    FooterComponent,
    MojoMerchantCtaComponent,
    NewsletterComponent


  ]
})
export class SharedModule { }

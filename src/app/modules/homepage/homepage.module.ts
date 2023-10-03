import { NgModule } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.component';
import { HomepageComponent } from './homepage.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/shared/shared.module';
import { PersonalComponent } from './pages/personal/personal.component';
import { HomepageHeroComponent } from './components/homepage-hero/homepage-hero.component';
import { BecomeAMojoerComponent } from './components/become-a-mojoer/become-a-mojoer.component';

@NgModule({
  declarations: [
    HomepageComponent,
    PersonalComponent,
    HomepageHeroComponent,
    BecomeAMojoerComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HomepageModule { }

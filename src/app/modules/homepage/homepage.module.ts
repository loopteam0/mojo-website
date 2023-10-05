import { NgModule } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.component';
import { HomepageComponent } from './homepage.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/shared/shared.module';
import { PersonalComponent } from './pages/personal/personal.component';
import { HomepageHeroComponent } from './components/homepage-hero/homepage-hero.component';
import { BecomeAMojoerComponent } from './components/become-a-mojoer/become-a-mojoer.component';
import { GeneralFeaturesComponent } from './components/general-features/general-features.component';
import { MediaAndPressComponent } from './components/media-and-press/media-and-press.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { PersonalPageHeroComponent } from './components/personal-page-hero/personal-page-hero.component';

@NgModule({
  declarations: [
    HomepageComponent,
    PersonalComponent,
    PersonalPageHeroComponent,
    HomepageHeroComponent,
    BecomeAMojoerComponent,
    GeneralFeaturesComponent,
    MediaAndPressComponent,
    FeedbacksComponent
  ],
  imports: [CommonModule, HomepageRoutingModule, MaterialModule, SharedModule],
})
export class HomepageModule {}

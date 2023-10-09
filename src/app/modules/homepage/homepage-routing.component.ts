import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { BusinessComponent } from './pages/business/business.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { FAQComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about-us/terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'about-us/faq', component: FAQComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}

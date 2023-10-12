import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { BusinessComponent } from './pages/business/business.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { FAQComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BusinessAgentComponent } from './pages/business-agent/business-agent.component';
import { CareersComponent } from './pages/careers/careers.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { LocatorComponent } from './pages/locator/locator.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'business/agents', component: BusinessAgentComponent },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'about-us/terms-and-conditions',
    component: TermsAndConditionsComponent,
  },
  { path: 'about-us/faq', component: FAQComponent },
  { path: 'about-us/careers', component: CareersComponent },
  { path: 'about-us/careers/job-details', component: JobDetailsComponent },
  {path: 'about-us/locate-mojo', component: LocatorComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/blog-detail', component: BlogDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}

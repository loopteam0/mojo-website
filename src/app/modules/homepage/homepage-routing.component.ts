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
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  
  { path: '', component: HomepageComponent },
  // { path: 'homepage', component: HomepageComponent },
  

  // {
  //   path: 'personal',
  //   children: [
  //     { path: '', component: PersonalComponent },
  //     { path: 'locate-mojo', component: LocatorComponent },
  //     // { path: 'faq', component: FAQComponent },
  //     { path: 'about-us', component: AboutUsComponent },
  //   ],
  // },
  // {
  //   path: 'business',
  //   children: [
  //     { path: '', component: BusinessComponent },
  //     // { path: 'faq', component: FAQComponent },
  //     { path: 'agents', component: BusinessAgentComponent },
  //   ],
  // },
  // {
  //   path: 'about-us',
  //   children: [
  //     { path: '', component: AboutUsComponent },
  //     { path: 'locate-mojo', component: LocatorComponent },
      // { path: 'privacy-policy', component: PrivacyPolicyComponent },
  //     {
  //       path: 'terms-and-conditions',
  //       component: TermsAndConditionsComponent,
  //     },
  //     { path: 'careers', component: CareersComponent },
  //     {
  //       path: 'careers/:jobTitle',
  //       component: JobDetailsComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'blog',
  //   children: [
  //     { path: '', component: BlogComponent },
  //     { path: 'blog-detail', component: BlogDetailComponent },
  //   ],
  // },


  // { path: 'personal', component: PersonalComponent },
  // { path: 'business', component: BusinessComponent },
  // { path: 'business/agents', component: BusinessAgentComponent },
  // { path: 'about-us', component: AboutUsComponent },
  {
    path: 'about-us/terms-and-conditions',
    component: TermsAndConditionsComponent,
  },
  { path: 'about-us/privacy-policy', component: PrivacyPolicyComponent },

  // { path: 'faq', component: FAQComponent },
  // { path: 'about-us/careers', component: CareersComponent },
  // { path: 'about-us/careers/job-details', component: JobDetailsComponent },
  // { path: 'locate-mojo', component: LocatorComponent },
  // { path: 'blog', component: BlogComponent },
  // { path: 'blog/blog-detail', component: BlogDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}

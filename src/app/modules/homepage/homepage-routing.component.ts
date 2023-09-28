import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { PersonalComponent } from 'src/app/modules/homepage/pages/personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,

    children: [
      {path: 'personal', component: PersonalComponent}
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}

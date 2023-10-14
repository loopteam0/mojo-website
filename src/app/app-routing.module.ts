import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageModule } from './modules/homepage/homepage.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => 
      import('./modules/homepage/homepage.module').then((m) => m.HomepageModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomepageModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

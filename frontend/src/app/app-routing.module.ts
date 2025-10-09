import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeightWeddingPagenotfoundComponent } from './component/neight-wedding-pagenotfound/neight-wedding-pagenotfound.component';
import { NeightTechWeddingHomeComponent } from './component/neight-tech-wedding-home/neight-tech-wedding-home.component';
import { NeightTechLoginComponent } from './component/neight-tech-login/neight-tech-login.component';
import { NeightecHomeComponent } from './component/neightec-home/neightec-home.component';

const routes: Routes = [
  { path: 'home',     component: NeightTechWeddingHomeComponent },
  { path: 'home-2',   component: NeightecHomeComponent },
  { path: 'login',    component: NeightTechLoginComponent },
  { path: '**',       component: NeightWeddingPagenotfoundComponent },    
  { path: '',         redirectTo: '/home', pathMatch: 'full' }, //need to be declared before PageNotFound
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }

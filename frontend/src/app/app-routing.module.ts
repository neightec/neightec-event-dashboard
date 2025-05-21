import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeightWeddingPagenotfoundComponent } from './component/neight-wedding-pagenotfound/neight-wedding-pagenotfound.component';
import { NeightTechWeddingHomeComponent } from './component/neight-tech-wedding-home/neight-tech-wedding-home.component';
import { NeightTechLoginComponent } from './component/neight-tech-login/neight-tech-login.component';

const routes: Routes = [
  { path: 'home',  component: NeightTechWeddingHomeComponent },
  // { path: 'guest-check-validation', component: NeightWeddingQrCodeComponent }, 
  // { path: 'guest-check-validation/:id', component: NeightCheckGuestValidationComponent},
  // { path: 'admin',           component: NeightWeddingAdminComponent },
  { path: 'login',          component: NeightTechLoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, //need to be declared before PageNotFound
  { path: '**',       component: NeightWeddingPagenotfoundComponent },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeightWeddingPagenotfoundComponent } from './component/neight-wedding-pagenotfound/neight-wedding-pagenotfound.component';
import { NeightWeddingHomeComponent } from './component/neight-wedding-home/neight-wedding-home.component';

const routes: Routes = [
  { path: 'home',  component: NeightWeddingHomeComponent },
  // { path: 'guest-check-validation', component: NeightWeddingQrCodeComponent }, 
  // { path: 'guest-check-validation/:id', component: NeightCheckGuestValidationComponent},
  // { path: 'admin',           component: NeightWeddingAdminComponent },
  // { path: 'login',          component: NeightWeddingLoginComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, //need to be declared before PageNotFound
  { path: '**',       component: NeightWeddingPagenotfoundComponent },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }

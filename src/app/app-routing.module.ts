import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './FrontOffice/sign-up/sign-up.component';
import { SignInComponent } from './FrontOffice/sign-in/sign-in.component';
const routes: Routes = [
  { path: 'signUp', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
  { path: '', redirectTo: 'signIn', pathMatch: 'full' },
  { path: '**', redirectTo: 'signIn' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

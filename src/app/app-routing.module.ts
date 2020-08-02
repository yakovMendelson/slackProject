import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChateComponent } from './components/chate/chate.component';
import { LoginComponent } from './components/login/login.component';
import { GuardLoginGuard } from './guards/guard-login.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'chate', component: ChateComponent,
  canActivate:[GuardLoginGuard]
},
// {path: '**', component: LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

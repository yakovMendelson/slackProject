import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChateComponent } from './components/chate/chate.component';
import { LoginComponent } from './components/login/login.component';
import { GradService } from './servies/grad.service';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'chate', component: ChateComponent,
  canActivate:[GradService]
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

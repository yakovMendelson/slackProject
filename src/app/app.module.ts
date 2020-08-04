import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChateComponent } from './components/chate/chate.component';

import { EvenPipe } from './pipes/even.pipe';
import { ModuleChateModule } from './module-chate/module-chate.module';
import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/users';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { SignUpComponent } from './components/sign-up/sign-up.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ChateComponent,
    EvenPipe,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModuleChateModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule, 
    StoreModule.forRoot( {Users:reducer}, {

      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

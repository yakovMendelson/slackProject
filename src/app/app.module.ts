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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ChateComponent,
    EvenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModuleChateModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

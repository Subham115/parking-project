import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MemberService } from './member.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    PageNotFoundComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting

  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const appRoutes: Routes = [

    {path: "", component: HomeComponent},
    {path: "signUp", component: SignUpComponent},
    {path: "login", component: LoginComponent},
    {path: "not-found", component: PageNotFoundComponent},
    {path: "**", redirectTo: "not-found"}
] 

@NgModule({

    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting{

}
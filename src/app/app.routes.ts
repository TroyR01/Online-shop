import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';
import { ErrorPage } from './pages/error/error.component';
import { LoginPage } from './pages/login/login.page';

export const routes: Routes = [
    {path: "home",component: HomePage},
    {path: "contact",component:ContactPage},
    {path: "about",component:AboutPage},
    {path: "error",component:ErrorPage},
    {path: "login",component:LoginPage},
    {path: "",redirectTo: "home",pathMatch: "full"},
    {path: "**",redirectTo: "error",pathMatch: "full"}
];

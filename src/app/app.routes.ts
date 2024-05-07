import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';
import { ErrorPage } from './pages/error/error.component';
import { LoginPage } from './pages/login/login.page';
import { PayPage } from './pages/pay-page/pay-page.page';
import { UserPage } from './pages/user/user.page';
import { CarritoPage } from './pages/carrito/carrito.page';
import { InventarioPage } from './pages/inventario/inventario.page';
import { ProductPage } from './pages/product/product.page';

export const routes: Routes = [
    {path: "home",component: HomePage},
    {path: "contact",component:ContactPage},
    {path: "about",component:AboutPage},
    {path: "error",component:ErrorPage},
    {path: "login",component:LoginPage},
    {path: "pay",component:PayPage},
    {path: "user/:id",component:UserPage},
    {path: "carrito",component:CarritoPage},
    {path: "inventario",component:InventarioPage},
    {path: "producto",component:ProductPage},
    {path: "",redirectTo: "home",pathMatch: "full"},
    {path: "**",redirectTo: "error",pathMatch: "full"}
];

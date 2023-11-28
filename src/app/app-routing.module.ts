import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home-2'},
    { 
        path: 'home-2', 
        component: HomeTwoComponent,
       ... canActivate(() => redirectUnauthorizedTo(['/register']))
    },
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent },
    // Here add new pages component
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
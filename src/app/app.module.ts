import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { NgxScrollTopModule } from 'ngx-scrolltop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { AboutComponent } from './components/layouts/about/about.component';
import { ServicesComponent } from './components/layouts/services/services.component';
import { FeaturesComponent } from './components/layouts/features/features.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeTwoComponent,
    AboutComponent,
    ServicesComponent,
    FeaturesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScrollTopModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { ContactComponent } from './components/contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTwoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

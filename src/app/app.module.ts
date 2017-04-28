import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyAWeEdfUqeWrrxxS1oU-r3Kk8XNuSAjwgQ",
        authDomain: "angularcolorado.firebaseapp.com",
        databaseURL: "https://angularcolorado.firebaseio.com",
        storageBucket: "angularcolorado.appspot.com",
        messagingSenderId: "606878939230"
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

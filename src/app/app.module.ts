import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post2/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent

  ], 
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

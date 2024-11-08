import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule],
})
export class AppModule { }

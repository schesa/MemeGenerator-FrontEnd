import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from "@angular/router";
import { GenerateComponent } from './generate/generate.component';
import { MemesComponent } from './memes/memes.component';
import {AppRoutingModule} from "./app.routing.module";
import { HttpClientModule } from '@angular/common/http';
import {UploadImageComponent} from "./upload-image/upload-image.component";
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    GenerateComponent,
    MemesComponent,
    UploadImageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

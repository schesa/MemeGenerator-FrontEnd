import { NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MemesComponent} from "./memes/memes.component";
import {GenerateComponent} from "./generate/generate.component";
import {UploadImageComponent} from "./upload-image/upload-image.component";
import {TabComponent} from "./tab/tab.component";


const routes: Routes = [
  { path: '*', redirectTo: ''},
  { path: '', component: TabComponent },
  { path: 'generate', component: GenerateComponent },
  { path: 'memes', component: MemesComponent },
  { path: 'upload-image', component: UploadImageComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import {MemeService} from "../meme.service";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  url: string;

  constructor(private memeService: MemeService) { }

  ngOnInit() {
    this.url = this.memeService.getImageUploadUrl();
  }

}

import {Component} from '@angular/core';
import {MemeService} from "../meme.service";
import {Meme} from "../meme";

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent{

  meme: Meme;

  top: string='When you hardcode';
  bottom: string='the BACKEND';
  img: string='assets/meme-templates/1.jpg';

  constructor(private memeService:MemeService) {
    this.generateMeme();
  }

  generateMeme(){
    this.memeService.getMeme().subscribe((meme: Meme) => {
      this.meme = {
        img : meme['path'],
        top : meme['textTop'],
        bottom : meme['textBottom']
      };
      console.log(this.meme);
    });
  }

}

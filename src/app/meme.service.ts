import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Meme} from "./meme";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  url: string="http://localhost:8080";
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getMeme(): Observable<Meme>{
    return this.http.get<Meme>(this.url+"/meme",{
      headers:this.headers
    });
  }

  getImageUploadUrl(): string{
    return this.url+"/uploadImage";
  }
}

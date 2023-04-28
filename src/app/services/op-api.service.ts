import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpApiService {

  private base_path = 'https://api.jikan.moe/v4'

  constructor(private http: HttpClient) { }

  getMovieOP(){
    return this.http.get(`${this.base_path}/anime?q=one piece&type=Movie`);
  }

  getCharacters(mal_id:string){
    return this.http.get(`${this.base_path}/anime/${mal_id}/characters`)
  }

  getDetailCharacter(character_mal_id:string){
    return this.http.get(`${this.base_path}/characters/${character_mal_id}/full`)
  }
  
}

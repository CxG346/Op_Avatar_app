import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpApiService } from 'src/app/services/op-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  idMovie: any;
  dataChar: any[] = []
  imgChar: string = ""
  name_spain: string = ""
  name_jpn: string = ""
  about: string = ""

  constructor(private opApi: OpApiService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const {params} = paramMap;
      this.idMovie = params.mal_id
      this.opApi.getCharacters(this.idMovie).subscribe(
        res => {
          this.dataChar = JSON.parse(JSON.stringify(res)).data
          console.log(this.dataChar)
          console.log(this.dataChar[0].character.images.jpg.image_url)
        },
        err => {console.log(err)}
      )
    })
  }
  
  detail(id:string){
    this.opApi.getDetailCharacter(id).subscribe(
      res => {
        const data = JSON.parse(JSON.stringify(res)).data
        console.log(data)
        console.log()
        this.imgChar = data.images.jpg.image_url 
        this.name_spain = data.name
        this.name_jpn = data.name_kanji
       this.about = data.about
      },
      err => {
        console.log(err)
      }
    )
  }
  

}

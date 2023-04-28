import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpApiService } from 'src/app/services/op-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  dataMovies:any = []

  constructor(private opApi: OpApiService, private router: Router){

  }
  ngOnInit(): void {
   this.opApi.getMovieOP().subscribe(
    res=>{console.log(res)
      this.dataMovies = JSON.parse(JSON.stringify(res)).data
      console.log(this.dataMovies)
      console.log(this.dataMovies[0].images.jpg.large_image_url)
    },err=>{

   })
  }

  openMovie(id: string){
    this.router.navigate([`/movie/${id}`])
  }

}

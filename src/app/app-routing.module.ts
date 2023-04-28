import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { MovieComponent } from './pages/movie/movie.component';
import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'movie/:mal_id',
    component: MovieComponent
  },
  {
    path: 'characters/:id',
    component: CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

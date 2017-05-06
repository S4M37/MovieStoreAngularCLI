import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AddMovieComponent} from "./addmovie/addmovie.component";
import {AddActorComponent} from "./addactor/addactor.component";
import {SearchMovieComponent} from "./search-movie/search-movie.component";

// Layouts

export const routes: Routes = [
  /*{
   path: '**',
   component : P404Component
   },*/
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-movie',
    component: AddMovieComponent
  },
  {
    path: 'add-actor',
    component: AddActorComponent
  },
  {
    path: 'search-movie',
    component: SearchMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

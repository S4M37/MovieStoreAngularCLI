import {HomeComponent} from "./home/home.component";
import {MovieService} from "./movie/service/movie.service";
import {ActorService} from "./actor/service/actor.service";
import {GenericService} from "./shared/service/generic.service";
import {MoviesComponent} from "./home/movies/movies.component";
import {ActorsComponent} from "./home/actors/actors.component";

export const providers = [
  MovieService, ActorService, GenericService
];

export const components = [
  HomeComponent,
  MoviesComponent,
  ActorsComponent
];

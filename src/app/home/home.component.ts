import {Component, OnInit} from '@angular/core';
import {Actor} from '../actor/Actor';
import {Movie} from '../movie/Movie';
import {ActorService} from '../actor/service/actor.service';
import {MovieService} from '../movie/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  actor: Actor;
  movie: Movie;

  isActorLoading: boolean;
  isMovieLoading: boolean;

  constructor(private actorService: ActorService, private movieService: MovieService) {
    this.actor = new Actor();
    this.movie = new Movie();
    this.isMovieLoading = false;
    this.isActorLoading = false;
  }

  ngOnInit() {
  }

  addActor() {
    this.isActorLoading = true;
    const baseContext = this;
    this.actorService.addActor(this.actor).subscribe(data => {
      baseContext.isActorLoading = false;
    }, error => {
      baseContext.isActorLoading = false;

    });

  }

  addMovie() {
    this.isMovieLoading = true;
    const baseContext = this;
    this.movieService.addMovie(this.movie).subscribe(data => {
      baseContext.isMovieLoading = false;
    }, error => {
      baseContext.isMovieLoading = false;
    });
  }
}

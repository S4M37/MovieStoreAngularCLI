import {Component, OnInit} from '@angular/core';
import {Movie} from '../../movie/Movie';
import {MovieService} from '../../movie/service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Array<Movie>;

  constructor(private movieService: MovieService) {
    this.movies = [];
  }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe(data => {
      this.movieService = data;
    }, error => {

    });
  }

}

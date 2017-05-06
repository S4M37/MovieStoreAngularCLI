import {Component, OnInit} from "@angular/core";
import {Movie} from "../../movie/Movie";
import {MovieService} from "../../movie/service/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Array<Movie>;

  constructor(private movieService: MovieService, private router: Router) {
    this.movies = [];
  }

  ngOnInit() {
    this.getMovies();
    const baseContext = this;
    this.movieService.onQueryChangedObservable = {
      onQueryChanged(query) {
        if (query.length === 0) {
          baseContext.getMovies();
          return;
        }
        baseContext.movieService.searchMovie(query).subscribe(data => {
          baseContext.movies = data;
          console.log(JSON.stringify(this.movies));
        }, error => {

        });
      }
    };
  }

  private getMovies() {
    this.movieService.getAllMovies().subscribe(data => {
      this.movies = data;
    }, error => {

    });
  }

  deleteMovie(movie: Movie, indice: number) {
    console.log(movie.title);
    this.movies.splice(indice, 1);
  }

  editMovie(movie: Movie, indice: number) {
      this.movieService.currentMovie=movie;
      this.router.navigate(['add-movie']);
  }
}

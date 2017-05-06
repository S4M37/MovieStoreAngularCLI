import {Component, OnInit} from "@angular/core";
import {MovieService} from "../movie/service/movie.service";
import {Movie} from "../movie/Movie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie: Movie;
  private isMovieLoading: boolean;

  constructor(private movieService: MovieService, private router: Router) {
    this.movie = movieService.currentMovie;
    if (!this.movie) {
      this.movie = new Movie();
    }
  }

  ngOnInit() {
  }

  addMovie() {
    const baseContext = this;
    if (this.movie.id) {
      this.movieService.editMovie(this.movie).subscribe(data => {
        baseContext.isMovieLoading = false;
        baseContext.router.navigate(['home']);
      }, error => {
        baseContext.isMovieLoading = false;
      });
      return;
    }
    this.movie.actors = [];
    console.log(JSON.stringify(this.movie));
    this.isMovieLoading = true;
    this.movieService.addMovie(this.movie).subscribe(data => {
      baseContext.isMovieLoading = false;
      baseContext.router.navigate(['home']);
    }, error => {
      baseContext.isMovieLoading = false;
    });
  }
}

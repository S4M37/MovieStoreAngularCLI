import {Component, OnInit} from "@angular/core";
import {MovieService} from "../movie/service/movie.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private movieService: MovieService) {
  }

  query: string;

  ngOnInit() {

  }

  onchange(query) {
    console.log(query);
    this.movieService.onQueryChangedObservable.onQueryChanged(query);
  }
}

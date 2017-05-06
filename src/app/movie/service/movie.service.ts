import {Injectable} from "@angular/core";
import {GenericService} from "../../shared/service/generic.service";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Endpoints} from "../../shared/Endpoints";
import {Movie} from "../Movie";

@Injectable()
export class MovieService extends GenericService {
  currentMovie: Movie;

  constructor(private http: Http) {
    super();
  }

  addMovie(movie: Movie) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // headers.append('Authorization', 'Bearer ' + Config.token);
    const options = new RequestOptions({headers: headers});
    console.log(JSON.stringify(movie));
    return this.http.post(
      Endpoints.MOVIES_ENDPOINT,
      movie,
      options
    ).map(response => {
      console.log('**** response *****');
      console.log('status ' + response.status);
      console.log('statusText ' + response.statusText);
      console.log('url ' + response.url);
      console.log('headers ' + JSON.stringify(response.headers));
      console.log('**** response *****');
      return response.json();
    }).map(data => {
      return data;
    }).catch(this.handleErrors);
  }

  getAllMovies() {
    const headers = new Headers({'Content-Type': 'application/json'});
    // headers.append('Authorization', 'Bearer ' + Config.token);
    const options = new RequestOptions({headers: headers});
    return this.http.get(
      Endpoints.MOVIES_ENDPOINT,
      options
    ).map(response => {
      this.handleResponse(response);
      return response.json();
    }).map(data => {
      return data;
    }).catch(this.handleErrors);
  }

  onQueryChangedObservable: OnQueryChangedObservable;

  searchMovie(query: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // headers.append('Authorization', 'Bearer ' + Config.token);
    const options = new RequestOptions({headers: headers});
    console.log(JSON.stringify({query: query}));
    return this.http.post(
      Endpoints.MOVIE_SEARCH,
      {query: query},
      options
    ).map(response => {
      console.log('**** response *****');
      console.log('status ' + response.status);
      console.log('statusText ' + response.statusText);
      console.log('url ' + response.url);
      console.log('headers ' + JSON.stringify(response.headers));
      console.log('**** response *****');
      return response.json();
    }).map(data => {
      const movies = [];
      data.films.forEach(function (tmp) {
        const movie = new Movie();
        movie.title = tmp._source.title;
        movie.id = tmp._source.id;
        movies.push(movie);
      });
      return movies;
    }).catch(this.handleErrors);
  }

  editMovie(movie: Movie) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // headers.append('Authorization', 'Bearer ' + Config.token);
    const options = new RequestOptions({headers: headers});
    console.log(JSON.stringify(movie));
    return this.http.put(
      Endpoints.MOVIES_ENDPOINT + '/' + movie.id,
      movie,
      options
    ).map(response => {
      console.log('**** response *****');
      console.log('status ' + response.status);
      console.log('statusText ' + response.statusText);
      console.log('url ' + response.url);
      console.log('headers ' + JSON.stringify(response.headers));
      console.log('**** response *****');
      return response.json();
    }).map(data => {
      return data;
    }).catch(this.handleErrors);
  }
}
interface OnQueryChangedObservable {
  onQueryChanged(query);
}

import {Injectable} from '@angular/core';
import {GenericService} from '../../shared/service/generic.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Endpoints} from '../../shared/Endpoints';
import {Movie} from '../Movie';

@Injectable()
export class MovieService extends GenericService {

  constructor(private http: Http) {
    super();
  }

  addMovie(movie: Movie) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // headers.append('Authorization', 'Bearer ' + Config.token);
    const options = new RequestOptions({headers: headers});
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

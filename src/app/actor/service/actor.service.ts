import {Injectable} from '@angular/core';
import {Actor} from '../Actor';
import {GenericService} from '../../shared/service/generic.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Endpoints} from '../../shared/Endpoints';

@Injectable()
export class ActorService extends GenericService {

  constructor(private http: Http) {
    super();
  }

  addActor(actor: Actor) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // headers.append('Authorization', 'Bearer ' + Config.token);
    const options = new RequestOptions({headers: headers});
    return this.http.post(
      Endpoints.ACTORS_ENDPOINT,
      actor,
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

  getAllActors() {
    const headers = new Headers({'Content-Type': 'application/json'});
    // headers.append('Authorization', 'Bearer ' + Config.token);
    const options = new RequestOptions({headers: headers});
    return this.http.get(
      Endpoints.ACTORS_ENDPOINT,
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

  deleteActor(id: number) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // headers.append('Authorization', 'Bearer ' + Config.token);
    const options = new RequestOptions({headers: headers});
    return this.http.delete(
      Endpoints.ACTORS_ENDPOINT + '/' + id,
      options
    ).map(response => {
      this.handleResponse(response);
      return response.json();
    }).map(data => {
      return data;
    }).catch(this.handleErrors);
  }
}

import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class GenericService {

  constructor() {
  }
  handleResponse(response: any) {
    console.log('**** response *****');
    console.log('status ' + response.status);
    console.log('statusText ' + response.statusText);
    console.log('url ' + response.url);
    console.log('headers ' + JSON.stringify(response.headers));
    console.log('handleResponse ' + JSON.stringify(response.json()));
    console.log('**** response *****');

  }

  handleErrors(error: any) {
    console.log('**** error *****');
    console.log('status ' + error.status);
    console.log('statusText ' + error.statusText);
    console.log('url ' + error.url);
    console.log('headers ' + JSON.stringify(error.headers));
    console.log('handleErrors ' + JSON.stringify(error.json()));
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    console.log('**** error *****');
    return Observable.throw(errMsg);
  }

}

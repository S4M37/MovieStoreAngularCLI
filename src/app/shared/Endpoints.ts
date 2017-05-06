export class Endpoints {

  public static readonly API_ENDPOINT = 'http://localhost:3000/';
  public static readonly ACTORS_ENDPOINT = Endpoints.API_ENDPOINT + 'actors';
  public static readonly MOVIES_ENDPOINT = Endpoints.API_ENDPOINT + 'movies';
  static MOVIE_SEARCH = Endpoints.API_ENDPOINT + 'elastic/movies/search';
  static ACTORS_SEARCH = Endpoints.API_ENDPOINT + 'elastic/actors/search';
}

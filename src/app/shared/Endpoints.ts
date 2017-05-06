export class Endpoints {

  public static readonly API_ENDPOINT = 'http://ec2-34-248-57-210.eu-west-1.compute.amazonaws.com:3000/';
  public static readonly ACTORS_ENDPOINT = Endpoints.API_ENDPOINT + 'actors';
  public static readonly MOVIES_ENDPOINT = Endpoints.API_ENDPOINT + 'movies';
  static MOVIE_SEARCH = Endpoints.API_ENDPOINT + 'elastic/movies/search';
  static ACTORS_SEARCH = Endpoints.API_ENDPOINT + 'elastic/actors/search';
}

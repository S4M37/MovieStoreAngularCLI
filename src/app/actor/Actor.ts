import {Movie} from '../movie/Movie';
export class Actor {
  id: number;
  name: string;
  birth_year: number;
  movies: Array<Movie>;
}

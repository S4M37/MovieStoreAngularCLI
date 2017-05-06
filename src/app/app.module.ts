import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {components, providers} from './app.config';
import {AppRoutingModule} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ActorsComponent} from './home/actors/actors.component';
import {MoviesComponent} from './home/movies/movies.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AddMovieComponent } from './addmovie/addmovie.component';
import { AddActorComponent } from './addactor/addactor.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ActorsComponent,
    MoviesComponent,
    NavbarComponent,
    AddMovieComponent,
    AddActorComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [...providers],
  bootstrap: [AppComponent]
})
export class AppModule {
}

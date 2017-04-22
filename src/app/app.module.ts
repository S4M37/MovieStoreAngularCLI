import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {components, providers} from './app.config';
import {AppRoutingModule} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdProgressBarModule,
  MdSidenavModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import { ActorsComponent } from './home/actors/actors.component';
import { MoviesComponent } from './home/movies/movies.component';


@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ActorsComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdToolbarModule, MdSidenavModule, MdCardModule,
    MdInputModule, MdTabsModule, MdButtonModule,
    MdProgressBarModule
  ],
  providers: [...providers],
  bootstrap: [AppComponent]
})
export class AppModule {
}

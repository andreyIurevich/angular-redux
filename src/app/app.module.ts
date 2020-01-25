import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmSelectedComponent } from './components/film-selected/film-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmItemComponent,
    FilmSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmItemComponent } from './components/film-item/film-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

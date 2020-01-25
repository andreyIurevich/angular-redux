import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Film } from './models/film';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as filmAction from './store/actions/films';

@Component({
  selector: 'app-root',
  template: `
    <main class="container">
      <app-film-list 
        [films]="films$ | async"
        [label]="'Список фильмов'"
        (select)="onSelect($event)">
      </app-film-list>
      <app-film-selected [film]="selected$ | async">
      </app-film-selected>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  films$: Observable<Film[]>;
  selected$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.films$ = store.select(fromRoot.getAllFilms);
    this.selected$ = store.select(fromRoot.getSelectedFilm);
  }

  onSelect(id: number) {
    this.store.dispatch(new filmAction.Select(id));
  }
}

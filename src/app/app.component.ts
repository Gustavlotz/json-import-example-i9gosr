import { Component } from '@angular/core';

import { XkcdComic } from './xkcd-comic/xkcd-comic';

import xkcd from '../assets/data/xkcd.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  comicsList: XkcdComic[] = xkcd.comics;
}

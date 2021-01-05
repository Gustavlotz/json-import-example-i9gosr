import { Component, OnInit, Input } from '@angular/core';

import { XkcdComic } from './xkcd-comic';

@Component({
  selector: 'app-xkcd-comic',
  templateUrl: './xkcd-comic.component.html',
  styleUrls: ['./xkcd-comic.component.scss']
})
export class XkcdComicComponent {
  @Input() comic: XkcdComic;
}
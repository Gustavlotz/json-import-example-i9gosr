import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XkcdComicComponent } from './xkcd-comic/xkcd-comic.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, XkcdComicComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { PokedexModule } from './pokedex/pokedex.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    PokedexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

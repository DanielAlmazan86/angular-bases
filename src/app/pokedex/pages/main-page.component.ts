import { PokedexService } from './../services/pokedex.service';
import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'pokedex-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
constructor (private pokedexService:PokedexService) {}
  get characters(): Character[] {
    return [...this.pokedexService.characters];
  }
  onDeleteCharacter(id:string):void {
    this.pokedexService.deleteCharacterById(id);
  }
  onNewCharacter(character : Character):void {
    this.pokedexService.addNewCharacter(character);
  }

}



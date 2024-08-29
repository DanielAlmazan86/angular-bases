import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class PokedexService {

  public characters:Character[]=[{
    id:uuid(),
    name:'Bulbasaur',
    power:12530
  },
    {
      id:uuid(),
      name:'Charmander',
      power:193
    },
    {
      id:uuid(),
      name:'Mewtwo',
      power:10040
  },
    {
      id:uuid(),
      name:'Pikachu',
      power:10,
    }

  ];

addNewCharacter(character:Character):void {
  const newCharacter:Character = {
    id:uuid(),
    ...character
  }
  this.characters.push(newCharacter);
}

deleteCharacterById(id:string):void {
  this.characters=this.characters.filter(character => character.id !== id);
}

}

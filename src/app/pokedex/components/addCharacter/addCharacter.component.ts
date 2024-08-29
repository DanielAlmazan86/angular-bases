import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'pokedex-add-character',
  templateUrl: './addCharacter.component.html',
})

export class AddCharacterComponent {
  public title:string='Agregar datos de pokemon'

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name:'',
    power:0
  };

  emitCharacter():void {

    if(this.character.name.length ===0) return;

    this.onNewCharacter.emit({...this.character});

    this.character.name='';
    this.character.power=0;
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'pokedex-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  @Input()
  public characterList:Character[]=[]

 @Output()
 public onCharacterIndex:EventEmitter<string>=new EventEmitter();

 characterId(id?:string):void {
  if (!id) return;
  this.onCharacterIndex.emit(id);
 }
}

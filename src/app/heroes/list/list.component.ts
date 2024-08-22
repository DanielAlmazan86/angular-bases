import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public pokemonName:string [] = ['Pikachu', 'Horsea', 'Kangaskan', 'Scyther'];
public deletedPokemon?:string;
trasnferirPokemon():void {
  this.deletedPokemon = this.pokemonName.pop();

}
}

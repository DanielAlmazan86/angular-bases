import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public name: string = 'peter';
 public age: number = 35;

cambiarNombre() :void {
  this.name='pedro';
};
cambiarEdad() :void {
this.age=48;
}

get capitalizedName():string{
  return this.name.toUpperCase();
}

getHeroDescription():string {

  return `${this.name} - ${this.age}`;
}
resetForm():void {
  this.name='peter';
  this.age=35;
}
}

import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  //templateUrl: './counter.component.html'
template:`
<h4>Pruebas de counter inline HTML</h4>
<h3>Counter: {{counter}}</h3>
<button (click)="sumarVisita(50)">
 +1
</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="restarVisita(20)">-1</button>

`})
export class CounterComponent {

  public counter: number = 10;
  sumarVisita(value:number):void {
    this.counter +=value ;
  };
  restarVisita(value:number):void {
    this.counter -= value;
  };
  resetCounter():void{
    this.counter=10;
  }


}


import { Component} from '@angular/core'

@Component({
    selector:'app-counter',
    template:`
    <h2>Counter : {{counter}}</h2>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">RESET</button>
    <button (click)="increaseBy(-1)">-1</button>
    `
})

export class  CounterComponent{
    public counter: number = 10;

    public increaseBy(n:number):void{
      this.counter+=n;
    }
  
    public resetCounter():void{
      this.counter = 10;
    }
}
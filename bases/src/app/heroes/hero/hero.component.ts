import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private modalService: NgbModal){}

  public open(modal: any): void {

    this.modalService.open(modal);

  }
  public name: string = 'ironman'
  public age:  number = 45

  get capitalizedName():string{
      return this.name.toUpperCase()
  }

  getHerodescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = "spiderman";
  }

  changeAge():void{
    this.age=23;
  }

  resetForm():void{
    this.name= 'ironman'
    this.age= 45
  }
}

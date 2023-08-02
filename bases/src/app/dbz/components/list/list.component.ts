import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  characterList: Character[]=[{
    id:'',
    name:'Trunks',
    power: 10
  }]

  @Output()
  public OnDelete: EventEmitter<string>= new EventEmitter();
  
  OnDeleteCharacter(id:string):void{
    this.OnDelete.emit(id);
  }
}

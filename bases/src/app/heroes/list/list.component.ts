import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spider-man', 'Iron-man', 'Hawk-eye', 'Captain America', 'Star Lord']
  public deleted?: string;
  removeLastHeroe():void{
    this.deleted=this.heroNames.pop();
  }
}

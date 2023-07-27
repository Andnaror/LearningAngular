import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private modalService: NgbModal){}


  public open(modal: any): void {

    this.modalService.open(modal);

  }
  public title : string = 'App con Angular';
  public counter: number = 10;

  public increaseBy(n:number):void{
    this.counter+=n;
  }

  public resetCounter():void{
    this.counter = 10;
  }
}

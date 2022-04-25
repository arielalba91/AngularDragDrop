import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  drop(event:CdkDragDrop<string[]>){
    moveItemInArray(this.players, event.previousIndex, event.currentIndex);
    this.players.forEach((value, index) => {
        value.Position = (index + 1);
    });
}
players:any[]=[{
  id: 1,
  Name:"Rohit Sharma",
  Position:1 
},{
  id:2,
  Name:"Virat Kohli",
  Position:2
},{
  id:3,
  Name:"MS Dhoni",
  Position:3
},{
  id:4,
  Name:"Shikar Dhawan",
  Position:4
},{
  id:5,
  Name:"Ambati Rayudu",
  Position:5
}]
  constructor() { }

  ngOnInit() {
  }

}

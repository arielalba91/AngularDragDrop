import { Component, OnInit } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
 
@Component({
  selector: 'group-drag-drop',
  templateUrl: './group-drag-drop.component.html',
  styleUrls: ['./group-drag-drop.component.css']
})
export class GroupDragDropComponent implements OnInit {
  squad = [
    "Rohit Sharma",
    "Virat Kohli",
    "Ms Dhoni",
    "Shikar Dhawan",
    "Ambati Rayudu",
    "Suresh Raina"
];

selectedPlayers =[];

drop(event:CdkDragDrop<string[]>){
  console.log(event);
  if(event.previousContainer === event.container){
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
  }else{
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-grouphomepage',
  templateUrl: './grouphomepage.component.html',
  styleUrls: ['./grouphomepage.component.css']
})
export class GrouphomepageComponent implements OnInit {

  constructor() { }
    ngOnInit(){}
  // @ts-ignore
  lists = [this.todo, this.done]
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  done2 = [

  ];
  doneitems = 0;
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }
}

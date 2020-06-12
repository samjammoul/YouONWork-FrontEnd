import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../../Moduls/Task';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Status} from '../../../Moduls/Status';
import {TeamHandlerService} from '../../TeamServ/team-handler.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
   @Input('tasks') tasks: Task[];
   @Input('statusList') statusList: Status[];
   @Output() someEvent = new EventEmitter<string>();
   @Output() refresh = new EventEmitter();
    private statusIndexA: number;
     id: number;

  constructor(private teamHandler: TeamHandlerService, private route: ActivatedRoute, private router: Router) {
      this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
  }
    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            console.log(event);
            console.log(event.container.data);
            console.log(event.previousIndex);
            console.log(event.currentIndex);
        } else {
            try {
                transferArrayItem(event.previousContainer.data,
                    event.container.data,
                    event.previousIndex,
                    event.currentIndex);
                var regex = /\d+/g;

                var match;
                while (match = regex.exec(event.container.id)) {
                    this.statusIndexA = parseInt(match[0]);
                }
                this.changeTaskStatus(event.previousIndex, this.statusIndexA);
            }catch (e) {
             //  console.log(e);
            }
            /*
            console.log(event);
            console.log(event.previousContainer.data);
            console.log(event.container.data);
            console.log(event.previousIndex);  // from index
            console.log(event.currentIndex);   // to index
            console.log(event.container.id);
            console.log(event.previousContainer.id);

             */
        }
    }

    changeTaskStatus(taskIndex: number, statusIndexA: number){
      const taskId: number =  this.statusList[statusIndexA].taskList[taskIndex].id;
      const currentStatusId: number = this.statusList[statusIndexA].id;
      this.teamHandler.changeStatusOfTask(taskId, currentStatusId);

    }
    deleteTask(taskId: number): void {
      console.log('sdfsd');
      this.teamHandler.deleteTask(taskId);
      this.refreshPage();
    }
    testParent() {
      this.someEvent.next('test');
    }
    refreshPage() {
      this.refresh.next();
    }
}


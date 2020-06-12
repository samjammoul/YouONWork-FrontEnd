import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from '../../../Moduls/Status';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TeamHandlerService} from "../../TeamServ/team-handler.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
    @Input('status') status: Status;
    @Input('statusList') statusList: Status[];
    @Output() refresh = new EventEmitter();
    addTaskBo = false;
    // @ts-ignore
    addTaskForm = new FormGroup('');

    constructor(private fb: FormBuilder, private teamHandlerService: TeamHandlerService, private  router: Router) {
     const TaskForm = {
            taskName: new FormControl('', [
                Validators.required,
                Validators.pattern('[a-zA-Z0-9-]+')
            ]),
        };
     this.addTaskForm = this.fb.group(TaskForm);
    }
    get taskName() {

        return this.addTaskForm.get('taskName');
    }
  ngOnInit(): void {

  }
  addTask() {
      this.addTaskBo = !this.addTaskBo;
      if (this.addTaskForm.invalid) {
          //console.log('fuck off');
      } else {
          this.teamHandlerService.addTask(this.addTaskForm.value.taskName, this.status.id);
          this.refresh.next();
      }
  }
  test(test: number) {
      console.log(test);
  }

    refreshPage($event: any) {
        this.refresh.next();
  }
}


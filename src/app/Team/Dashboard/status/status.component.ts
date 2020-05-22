import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from '../../../Moduls/Status';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
     createTaskForm: FormGroup;
    profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
        address: this.fb.group({
            street: [''],
            city: [''],
            state: [''],
            zip: ['']
        })
    });

    constructor(private fb: FormBuilder) {
    }
    /*
    get taskText(){
      return this.createTaskForm.get('taskText');
    }

     */
  ngOnInit(): void {
      this.createTaskForm = this.fb.group({
          taskText: [null, Validators.required,
              Validators.minLength(3),
              Validators.maxLength(200),
             Validators.pattern('^[a-z0-9_]')
          ]
      });
      console.log(this.createTaskForm.value);


  }

  addTask(){
      this.addTaskBo = !this.addTaskBo;
          }

  test(test: number) {
      console.log(test);
  }

    refreshPage($event: any) {
        this.refresh.next();
        console.log('status');
  }


    creatTask() {
    }
 get taskText() {
      return this.createTaskForm.get('taskText');
 }


}


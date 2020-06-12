import {Task} from './Task';

export class Status {
    id: number;
    statusText: string;
    teamId: number;
    taskList: Task[] = [];
}

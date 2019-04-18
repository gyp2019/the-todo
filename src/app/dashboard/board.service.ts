import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Promise } from 'q';

import { Board } from './model/Board';
import { Task } from './model/Task';
import { SubTask } from './model/SubTask';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private boards: Board[];

  constructor(
    private http: HttpClient,
  ) { }

  getDate(): Board[] {

    const emptySubTask = new SubTask();
    emptySubTask.id = 1;
    emptySubTask.title = 'Just do it.';

    const emptyTask = new Task();
    emptyTask.id = 1
    emptyTask.titls = 'Hello Todo.';
    emptyTask.subTasks = [];
    emptyTask.subTasks.push(emptySubTask);
    emptyTask.subtaskHeaderId = 1;

    const emptyBoard = new Board();
    emptyBoard.id = 1;
    emptyBoard.title = 'First Board!';
    emptyBoard.tasks = [];
    emptyBoard.tasks.push(emptyTask);

    this.boards = []
    this.boards.push(emptyBoard);

    return this.boards;
  }

  getBoardsWithPromises(): Promise<Board[]> {

  }
}

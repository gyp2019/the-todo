import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Board } from '../model/Board';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private boards: Board[];

  constructor(
    private service: BoardService,
  ) { }

  ngOnInit() {
    this.boards = this.service.getDate();
  }

}

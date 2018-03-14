import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    tiles: Array<any> = [];
  constructor( public gameService: GameService) { }

  ngOnInit() { }

  playerClick(i) {
    if (this.gameService.turn === 0) {
      this.gameService.blocks[i].setValue('person');
    } else {
      this.gameService.blocks[i].setValue('android');
    }

    this.changeTurn();
  }

  changeTurn() {
    const player = this.gameService.changeTurn();

    if ( player === 1 ) { // Bot Turn
      this.botTurn();
    }
    }

  botTurn() {
    alert('Bot');
  }

}

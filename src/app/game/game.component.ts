import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  lock = false;
    tiles: Array<any> = [];
  constructor( public gameService: GameService, public snackBar: MatSnackBar) { }

  ngOnInit() { }

  playerClick(i) {
    if ( this.gameService.blocks[i].free === false || this.lock === true ) { // If Block is already fill, don't Do anything
      return;
    }

    this.gameService.freeBlocksRemaining -= 1; // Reduce no. of free blocks after each selection

    if ( this.gameService.freeBlocksRemaining <= 0 ) {

      this.gameService.draw += 1;
      this.lock = true;
      this.snackBar.open('Game:', 'Draw', {
          duration: 4000,
        });
      this.newGame();
      return;
    }


    this.gameService.blocks[i].free = false;

    if ( this.gameService.turn === 0 ) { // Person Turn
      this.gameService.blocks[i].setValue('person');

    } else { // Bot Turn
      this.gameService.blocks[i].setValue('android');
    }

    const complete = this.gameService.blockSetComplete();

    if ( complete === false ) {
      this.changeTurn();
      return;

    } else {
      this.lock = true;
      this.gameService.players[this.gameService.turn].score += 1;
      this.snackBar.open('Winner:', (this.gameService.turn === 0 ? 'PERSON' : 'BOT'), {
          duration: 4000,
        });

        return;
    }

  }



  changeTurn() {
    const player = this.gameService.changeTurn();

    if ( player === 1 ) { // Bot Turn
      this.botTurn();
    }
  }

  botTurn() {

    if ( this.gameService.freeBlocksRemaining <= 0 ) {
      return;
    }

    const bot_selected = this.gameService.figureBotMove() - 1;

    if ( this.gameService.blocks[bot_selected].free === true ) {
      this.playerClick(bot_selected);
    } else {
      this.botTurn();
      return;
    }

  }

  newGame() {
    this.gameService.freeBlocksRemaining = 9;
    this.gameService.intiBlocks();
    this.lock = false;
    this.gameService.turn = 0;
  }

}

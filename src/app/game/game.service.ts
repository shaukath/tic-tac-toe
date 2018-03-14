import { Injectable } from '@angular/core';
import { Block } from './block';
import { Player } from './player';

@Injectable()
export class GameService {

  players = [];
  turn = 0;
  draw = 0;

  blocks = [];
  freeBlocksRemaining = 9;

  constructor() {
    this.intiBlocks();
    this.initPlayers();
   }

  intiBlocks() {
    this.blocks = [];
    for (let i = 1; i <= 9; ++i) {
      const block = new Block();
      block.free = true;
      block.value = '';
      block.symbol = '';
      this.blocks.push(block);
    }
  }

  initPlayers() {
    this.players = [];
    const manPlayer = new Player();
    manPlayer.bot = false;

    const botPlayer = new Player();

    this.players.push(manPlayer);
    this.players.push(botPlayer);
  }

  changeTurn() {

  if ( this.turn === 1 ) {
    this.turn = 0;
    } else {
      this.turn = 1;
    }

    return this.turn;
  }


}

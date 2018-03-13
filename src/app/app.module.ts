import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';



import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameService } from './game/game.service';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule, MatGridListModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

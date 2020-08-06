import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetTypeComponent } from './components/bet-type/bet-type.component';
import { BetTypeMarketComponent } from './components/bet-type-market/bet-type-market.component';
import { CountryCrudComponent } from './components/country-crud/country-crud.component';
import { EventCrudComponent } from './components/event-crud/event-crud.component';
import { MarketsComponent } from './components/markets/markets.component';
import { OddsComponent } from './components/odds/odds.component';
import { SportCountryComponent } from './components/sport-country/sport-country.component';
import { SportCrudComponent } from './components/sport-crud/sport-crud.component';
import { SportTournamentComponent } from './components/sport-tournament/sport-tournament.component';
import { TournamentBettypeComponent } from './components/tournament-bettype/tournament-bettype.component';
import { TournamentsCrudComponent } from './components/tournaments-crud/tournaments-crud.component';
import { BonusTblComponent } from './components/bonus-tbl/bonus-tbl.component';
import { RecentBetsComponent } from './components/recent-bets/recent-bets.component';

@NgModule({
  declarations: [
    AppComponent,
    BetTypeComponent,
    BetTypeMarketComponent,
    CountryCrudComponent,
    EventCrudComponent,
    MarketsComponent,
    OddsComponent,
    SportCountryComponent,
    SportCrudComponent,
    SportTournamentComponent,
    TournamentBettypeComponent,
    TournamentsCrudComponent,
    BonusTblComponent,
    RecentBetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

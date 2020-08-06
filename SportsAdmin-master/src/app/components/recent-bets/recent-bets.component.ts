import { Component, OnInit } from '@angular/core';
import { IBetTbl } from '../../Models/betItem';
import { IBetSLip } from '../../Models/betSlip';
import {ViewBetsService} from '../../services/view-bets.service';

@Component({
  selector: 'app-recent-bets',
  templateUrl: './recent-bets.component.html',
  styleUrls: ['./recent-bets.component.css']
})
export class RecentBetsComponent implements OnInit {

  betItems:IBetTbl[];
  bets:IBetSLip[];

  constructor(private betsViewService:ViewBetsService) { }

  ngOnInit(): void {
    this.getBetItems();
    this.getBetItems();
  }

  getBetItems(){
    this.betsViewService.getBetEvents().subscribe((data:any)=>{
      this.betItems=data;
      console.log('Bet Items',this.betItems);
    });
  }

  getBets(){
    this.betsViewService.getBets().subscribe((data:any)=>{
      this.bets=data;
      console.log('bets', this.bets);
    });
  }

}

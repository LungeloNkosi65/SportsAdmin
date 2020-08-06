import { Component, OnInit } from '@angular/core';
import {BonustblService} from '../../services/bonustbl.service';
import {BonusTbl} from '../../Models/bonusTbl';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-bonus-tbl',
  templateUrl: './bonus-tbl.component.html',
  styleUrls: ['./bonus-tbl.component.css']
})
export class BonusTblComponent implements OnInit {

  bonusForm:any;
  bonuses:BonusTbl[];
  updateBonus:number;

  constructor(private bonusTblService:BonustblService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.bonusForm=this.formBuilder.group({
      Legs:['',Validators.required],
      BonusPercent:['',Validators.required]
    });
    this.getBonuses();
  }

  getBonuses(){
    this.bonusTblService.GetBonusTable().subscribe((data:any)=>{
      this.bonuses=data;
    });
  }

  getSIngleRecord(bonusId:number){
    this.bonusTblService.GetSingleRecord(bonusId).subscribe((data:any)=>{
      this.bonusForm.controls['Legs'].setValue(data[0].Legs);
      this.bonusForm.controls['BonusPercent'].setValue(data[0].BonusPercent);
    });
  }

  addRecord(bonusTbl:BonusTbl){
    if(bonusTbl!=null && bonusTbl!=undefined){
      if(this.updateBonus==null){

         this.bonusTblService.AddRecord(bonusTbl).subscribe((data:any)=>{
           alert(data.text);
           this.getBonuses();
           this.setHeading();
         });
      }
      else{
        //Update Table
        bonusTbl.BonusId=this.updateBonus;
        this.bonusTblService.UpdateRecord(this.updateBonus,bonusTbl).subscribe((data:any)=>{
          alert(data.text);
          this.getBonuses();
          this.setHeading();
        })
      }
    }
  }

  deleteRecord(bonusId:number){
    if(window.confirm("Are you sure you want to delete this record")){
      this.bonusTblService.DeleteRecor(bonusId).subscribe((data:any)=>{
        alert(data.text);
        this.getBonuses();
      });
    }
    
  }


  loadFrom(bonusId:number){
   this.updateBonus=bonusId;
   this.getSIngleRecord(bonusId);
  }
  onFormSubmit(){
  const formData=this.bonusForm.value;
  this.addRecord(formData);
  }

  setHeading(){
    this.bonusForm.reset();
    this.updateBonus=null;
  }

}

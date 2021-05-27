import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Volunteer } from '../../volunteer/models/volunteer.model';
import { SchedulingService } from '../scheduling.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {

  week: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Motzash"];
  // _scheduling: FormGroup;
  // scheduling: Volunteer[] = [];
  // sunday: Volunteer[] = [];
  // monday: Volunteer[] = [];
  // tuesday: Volunteer[] = [];
  // wednesday: Volunteer[] = [];
  // thursday: Volunteer[] = [];
  // friday: Volunteer[] = [];
  // motzash: Volunteer[] = [];
  // potentialVolunteers: Volunteer[] = [];
  potentialVolunteersByDay: Volunteer[][] = [[]];
  schedulingForm: FormGroup;
  private _scheduling: Volunteer[] = [];


  ngAfterViewInit() {
    console.log(" this.schedulingForm" ,  this.schedulingForm);
 
  }
  public set scheduling(value: Volunteer[]) {
    debugger; 
    console.log('this._schedulingService.scheduling.value[0]' , this._schedulingService.scheduling.value[0])
    this._scheduling = value;
    if (this._scheduling != undefined) {
      this.schedulingForm = new FormGroup({
        "Sunday": new FormControl(this._schedulingService.scheduling.value[0]),
        "Monday": new FormControl(this._schedulingService.scheduling.value[1]),
        "Tuesday": new FormControl(this._schedulingService.scheduling.value[2]),
        "Wednesday": new FormControl(this._schedulingService.scheduling.value[3]),
        "Thursday": new FormControl(this._schedulingService.scheduling.value[4]),
        "Friday": new FormControl(this._schedulingService.scheduling.value[5]),
        "Motzash": new FormControl(this._schedulingService.scheduling.value[6])
      })
      console.log(" this.schedulingForm" ,  this.schedulingForm);
    }
  }
  public get scheduling(): Volunteer[] {
    console.log(" this.schedulingForm" ,  this.schedulingForm);
    return this._scheduling;
  }

  constructor(public _schedulingService: SchedulingService) { }

  ngOnInit(): void {

  //  this.initFormScheduling(); 
    for (let i = 0; i < 7; i++) {
      this.getVolunteersByDay(i);
    }
    console.log(this._schedulingService.scheduling.value);
    this.scheduling = this._schedulingService.scheduling.value;
  }
  initFormScheduling() {
    if (this._scheduling != undefined) {
      this.schedulingForm = new FormGroup({
        "Sunday": new FormControl(this._schedulingService.scheduling.value[0]),
        "Monday": new FormControl(this._schedulingService.scheduling.value[1]),
        "Tuesday": new FormControl(this._schedulingService.scheduling.value[2]),
        "Wednesday": new FormControl(this._schedulingService.scheduling.value[3]),
        "Thursday": new FormControl(this._schedulingService.scheduling.value[4]),
        "Friday": new FormControl(this._schedulingService.scheduling.value[5]),
        "Motzash": new FormControl(this._schedulingService.scheduling.value[6])
      })
  }
  }
  getVolunteersByDay(day: number) {
    this._schedulingService.getVolunteerByDay(day).subscribe(volunteers => {
      this.potentialVolunteersByDay[day] = volunteers;
    })
  }

  updateScheduling() {
     console.log('this.schedulingForm.value' , this.schedulingForm.controls); 
    if (this._schedulingService.updateSchedulig(this.schedulingForm.value)) {
      console.log('save scheduling ', this.schedulingForm.value);
      // alert("Scheduling updated successfully");
    }
    else
      alert("Scheduling not updated");
  }

  // getPotentialVolunteersList() {
  //   this._schedulingService.getPotentialVolunteers().subscribe(data => {
  //     data.forEach(volunteer => {
  //       switch (volunteer.day) {
  //         case 0:
  //           this.sunday.push(volunteer);
  //           break;
  //         case 1:
  //           this.monday.push(volunteer);
  //           break;
  //         case 5:
  //           this.tuesday.push(volunteer);
  //           break;
  //         case 3:
  //           this.wednesday.push(volunteer);
  //           break;
  //         case 4:
  //           this.thursday.push(volunteer);
  //           break;
  //         case 5:
  //           this.friday.push(volunteer);
  //           break;
  //         case 6:
  //           this.motzash.push(volunteer);
  //           break;
  //         // case 0:
  //         //   this.potentialVolunteersByDay[0].push(volunteer);
  //         //   break;
  //         // case 1:
  //         //   this.potentialVolunteersByDay[1].push(volunteer);
  //         //   break;
  //         // case 5:
  //         //   this.potentialVolunteersByDay[2].push(volunteer);
  //         //   break;
  //         // case 3:
  //         //   this.potentialVolunteersByDay[3].push(volunteer);
  //         //   break;
  //         // case 4:
  //         //   this.potentialVolunteersByDay[4].push(volunteer);
  //         //   break;
  //         // case 5:
  //         //   this.potentialVolunteersByDay[5].push(volunteer);
  //         //   break;
  //         // case 6:
  //         //   this.potentialVolunteersByDay[6].push(volunteer);
  //         //   break;
  //       }
  //     });
  //     this.potentialVolunteersByDay = [this.sunday, this.monday, this.tuesday, this.wednesday, this.thursday, this.friday, this.motzash]
  //     // this.potentialVolunteersByDay[0].push(this.sunday);
  //     // this.potentialVolunteersByDay[1].push(this.monday);
  //     // this.potentialVolunteersByDay[2].push(this.tuesday);
  //     // this.potentialVolunteersByDay[3].push(this.wednesday);
  //     // this.potentialVolunteersByDay[4].push(this.thursday);
  //     // this.potentialVolunteersByDay[5].push(this.friday);
  //     // this.potentialVolunteersByDay[6].push(this.motzash);
  //     console.log("PotentialVolunteersByDay " + this.potentialVolunteersByDay);
  //     // for (let index = 0; index < 7; index++) {
  //     //   data.forEach(volunteer => {
  //     //     if (volunteer.day = index) {
  //     //       this.potentialVolunteersByDay[index].push(volunteer);
  //     //     }
  //     //   });
  //     // }
  //     // this.potentialVolunteers = data;
  //     // for (let index=0; index<7; index++) {
  //     //   this.getVolunteersForToday(index);
  //     // console.log(this.potentialVolunteersByDay[index]);
  //     //   }
  //     //console.log("getItemByDay"+ this.potentialVolunteers, " data:"+ data)
  //     // return this.volunteersToday;
  //   });
  // }

  // getVolunteersForToday(day: number) {
  //   this.potentialVolunteers.forEach(volunteer => {
  //     if (volunteer.day = day) {
  //       this.potentialVolunteersByDay[day].push(volunteer);
  //     }
  //   })
  // }


}

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
  potentialVolunteersByDay: Volunteer[][] = [[]];
  schedule: Volunteer[] = [];
  scheduleTemp: Volunteer[] = [];

  constructor(public _schedulingService: SchedulingService) { }

  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      this.getVolunteersByDay(i);
    }
    this._schedulingService.getSchedule().subscribe(data => {
      this.schedule = data;
    });
  }

  getVolunteersByDay(day: number) {
    this._schedulingService.getVolunteerByDay(day).subscribe(volunteers => {
      this.potentialVolunteersByDay[day] = volunteers;
    })
  }

  updateSchedule() {
    this.schedule.forEach((volunteer, index) => {
      if (volunteer) {
        this.scheduleTemp[index] = volunteer;
      }
    });
    this._schedulingService.updateSchedule(this.scheduleTemp).subscribe(result => {
      if (result == true) {
        alert("Schedule updated successfully");
      }
    }, err => {
      alert("Schedule not updatedn");
    });
  }
}

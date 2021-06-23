import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Volunteer } from '../models/volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { SchedulingService } from '../../scheduling/scheduling.service';


@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss']
})
export class VolunteerDetailsComponent implements OnInit {

  public set volunteer(value: Volunteer) {
    this._volunteer = value;
  }
  public get volunteer(): Volunteer {
    return this._volunteer
  }

  private _volunteer: Volunteer = new Volunteer('');
  @Input() volunteerId: number;
  volunteerForm: FormGroup;

  constructor(private _acr: ActivatedRoute, private _volunteerService: VolunteerService, private _router: Router, private _schedulingService: SchedulingService) {
  }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(paramMap => {
      if (paramMap.has("id"))
        this.volunteerId = +paramMap.get("id");
    });
    this._volunteerService.volunteersList.subscribe(data => {
      if (this.volunteerId) {
        this._volunteer = data.filter(x => x.id == this.volunteerId)[0];
      }
    }, err => alert(err.message));
    this.inintVolunteerForm();
  }

  inintVolunteerForm() {
    if (this._volunteer != undefined) {
      let checkboxArray = new FormArray([]);
      this.volunteer.volunteerWeek.forEach(v => checkboxArray.push(new FormControl(v)));
      this.volunteerForm = new FormGroup({
        "id": new FormControl(this.volunteer.id, [Validators.minLength(9), Validators.maxLength(9), Validators.required]),
        "firstName": new FormControl(this.volunteer.firstName, [Validators.required]),
        "lastName": new FormControl(this.volunteer.lastName, [Validators.required]),
        "phone": new FormControl(this.volunteer.phone),
        "email": new FormControl(this.volunteer.email, [Validators.email]),
        "volunteerWeek": checkboxArray
      })
    }
  }

  saveNewVolunteerDetails() {
    this.volunteer = this.volunteerForm.value;
    let flag = false;
    this._schedulingService.getSchedule().subscribe(data => {
      data.forEach((volunteer, index) => {
        if (!this.volunteer.volunteerWeek[index] && volunteer && volunteer.id == this.volunteer.id) {
          alert("Before you cancel the volunteer day, you need to update the schedule");
          flag = true;
        }
      });
      if (!flag) {
        this._volunteerService.saveVolunteerToList(this.volunteer);
        this._router.navigate(["/volunteer-list"]);
      }
    });
  }
}


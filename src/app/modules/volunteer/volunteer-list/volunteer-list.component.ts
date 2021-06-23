import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Volunteer } from '../models/volunteer.model';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent implements OnInit {

  volunteerslist: any; 
  constructor(private _volunteerService: VolunteerService, private _router: Router) { }

  ngOnInit(): void {
    this._volunteerService.volunteersList.subscribe(data=>{
      if(data)
      this.volunteerslist = data;
    });
  }

  showVolunteerDetails(idVolunteer: number){
    this._router.navigate(["/volunteer-details", idVolunteer]);
  }
}

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

  // @Input()
  // volunteerslist: Volunteer[] = [];
  volunteerslist: any; 
  constructor(private _volunteerService: VolunteerService, private _router: Router) { }

  ngOnInit(): void {
    // this.volunteerslist = this._volunteerService.volunteersList.value;
    // console.log('   this.volunteerslist ' ,    this.volunteerslist );
    this._volunteerService.volunteersList.subscribe(data=>{
      if(data)
      this.volunteerslist = data;
      console.log("data: " + data + " volunteers list: " + this.volunteerslist);
    });
  

    // this._volunteerService.getVolunteersList().subscribe(data=>{
    //   this.volunteersList = data;
    //   console.log("volunteer list" + this.volunteersList);
    // }, err=> alert("ERROR getVolunteersList"));
  }

  showVolunteerDetails(idVolunteer: number){
    this._router.navigate(["/volunteer-details", idVolunteer]);
  }
}

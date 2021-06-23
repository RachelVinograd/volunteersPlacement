import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Volunteer } from './models/volunteer.model';

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
headers.append('Accept', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  volunteersList: BehaviorSubject<Volunteer[]> = new BehaviorSubject<Volunteer[]>(undefined);;

  constructor(private _http: HttpClient) {
    this.getVolunteersList().subscribe(data => {
      this.volunteersList.next(data);
    }, err => alert("ERROR getVolunteersList"));
  }

  getVolunteersList(): Observable<Volunteer[]> {
    return this._http.get<Volunteer[]>("/api/volunteers");
  }

  saveVolunteerToList(volunteerToSave: Volunteer) {
    let volunteerToUpdate = this.volunteersList.value.filter(x => x.id == volunteerToSave.id)[0]
    this.updateVolunteer({ id: volunteerToUpdate.id, volunteer: volunteerToSave }).subscribe(data => {
      if (data) {
        alert("The changes saved successfully");
      }
      else
        alert("saved failed");
    }, err => alert(err.message)
    );
    let index = this.volunteersList.value.indexOf(volunteerToUpdate);
    this.volunteersList.value[index] = volunteerToSave;
    this.volunteersList.next(this.volunteersList.value);
  }

  updateVolunteer({ id, volunteer }: { id: number; volunteer: Volunteer; }): Observable<boolean> {
    return this._http.put<boolean>("/api/Volunteers/" + id, JSON.stringify(volunteer)
     , { headers: headers });

  }
}

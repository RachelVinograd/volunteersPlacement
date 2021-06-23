import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, observable } from "rxjs";
import { Volunteer } from "../volunteer/models/volunteer.model";

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
headers.append('Accept', 'application/json');

@Injectable({
    providedIn: 'root'
})
export class SchedulingService {

    constructor(private _http: HttpClient) { 
    }

    getSchedule(): Observable<Volunteer[]> {
        return this._http.get<Volunteer[]>("api/Scheduling");
    }

    getVolunteerByDay(day: number): Observable<Volunteer[]> {
        return this._http.get<Volunteer[]>("/api/Scheduling/" + day);
    }

    updateSchedule(updateSchedule: Volunteer[]) : Observable<any> {
        return this._http.put<boolean>("/api/scheduling/", updateSchedule, { headers: headers });
    }

}
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

    d:Volunteer[] = [new Volunteer(78)];
    scheduling: BehaviorSubject<Volunteer[]> = new BehaviorSubject<Volunteer[]>(this.d);

    constructor(private _http: HttpClient) { 
        this.getScheduling().subscribe(data=>{
            this.scheduling.next(data);
        });
    }

    getScheduling(): Observable<Volunteer[]> {
        return this._http.get<Volunteer[]>("api/Scheduling");
    }

    getVolunteerByDay(day: number): Observable<Volunteer[]> {
        return this._http.get<Volunteer[]>("/api/Scheduling/" + day);
    }

    updateSchedulig(updateSchedulig: Volunteer[]): boolean {
        this.scheduling.next(updateSchedulig);
        if (this._http.put<boolean>("/api/scheduling/", updateSchedulig, { headers: headers }))
            return true;
    }





}
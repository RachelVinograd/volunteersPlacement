import { NgModule } from "@angular/core";
import { VolunteerListComponent } from "./volunteer-list/volunteer-list.component";
import { HttpClientModule } from "@angular/common/http";
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SchedulingComponent } from "../scheduling/scheduling/scheduling.component";
import { schedulingModule } from "../scheduling/scheduling.module";



@NgModule({
    declarations: [VolunteerListComponent, VolunteerDetailsComponent],
    imports: [HttpClientModule, ReactiveFormsModule, CommonModule, BrowserModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class volunteermodule{

}
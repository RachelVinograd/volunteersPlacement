import { NgModule } from "@angular/core";
import { VolunteerListComponent } from "./volunteer-list/volunteer-list.component";
import { HttpClientModule } from "@angular/common/http";
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [VolunteerListComponent, VolunteerDetailsComponent],
    imports: [HttpClientModule, ReactiveFormsModule, CommonModule, BrowserModule, FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class volunteermodule{

}
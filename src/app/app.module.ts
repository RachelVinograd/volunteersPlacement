import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { volunteermodule } from './modules/volunteer/volunteer.module';
import { schedulingModule } from './modules/scheduling/scheduling.module';
import { MaterialModule } from './matrial/matrial.module';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [volunteermodule, schedulingModule, BrowserModule, ReactiveFormsModule, appRoutingModule, HttpClientModule, CommonModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

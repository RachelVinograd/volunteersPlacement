import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "src/app/matrial/matrial.module";
import { SchedulingComponent } from "./scheduling/scheduling.component";

@NgModule({
    declarations: [SchedulingComponent],
    imports: [HttpClientModule, ReactiveFormsModule, CommonModule, BrowserModule, MaterialModule],
    exports: [SchedulingComponent]
})
export class schedulingModule{

}
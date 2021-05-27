import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SchedulingComponent } from "./modules/scheduling/scheduling/scheduling.component";
import { VolunteerDetailsComponent } from "./modules/volunteer/volunteer-details/volunteer-details.component";
import { VolunteerListComponent } from "./modules/volunteer/volunteer-list/volunteer-list.component";

const APP_ROUTES: Route[] = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "volunteer-list", component: VolunteerListComponent },
  { path: "volunteer-details/:id", component: VolunteerDetailsComponent},
  { path: "scheduling", component: SchedulingComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class appRoutingModule {

}
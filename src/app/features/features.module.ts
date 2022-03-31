import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { TeamsHomeComponent } from './teams-home/teams-home.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    TeamsHomeComponent,
    TeamDetailsComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatListModule,
  ],
  exports: [TeamsHomeComponent,TeamDetailsComponent ]
})
export class FeaturesModule { }

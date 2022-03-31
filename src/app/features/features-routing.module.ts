import { TeamDetailsComponent } from './team-details/team-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsHomeComponent } from './teams-home/teams-home.component';

const routes: Routes = [
  {
      path: '',
      component: TeamsHomeComponent,
  },
  {
      path: 'List',
      component: TeamDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule { }

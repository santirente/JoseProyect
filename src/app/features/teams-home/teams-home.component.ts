import { TeamsModel } from './../models/Temas.model';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-teams-home',
  templateUrl: './teams-home.component.html',
  styleUrls: ['./teams-home.component.scss'],
})
export class TeamsHomeComponent implements OnInit {
  teamsList!: Array<TeamsModel>;
  constructor(private service: HttpServiceService) {}

  ngOnInit(): void {
    this.getTeamsList();
  }

  getTeamsList(): void {
    this.teamsList = this.service.getListTeams();
    console.log(this.teamsList);
  }
}

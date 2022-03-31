import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamsModel } from '../features/models/Temas.model';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor() { }

  getListTeams(): Array<TeamsModel>{
    return [{
      "id": 48,
      "name": "Alavés"
  }, {
      "id": 1,
      "name": "Athletic"
  }, {
      "id": 2,
      "name": "Atlético"
  }, {
      "id": 3,
      "name": "Barcelona"
  }, {
      "id": 4,
      "name": "Betis"
  }, {
      "id": 499,
      "name": "Cádiz"
  }, {
      "id": 5,
      "name": "Celta"
  }, {
      "id": 7,
      "name": "Eibar"
  }, {
      "id": 23,
      "name": "Elche"
  }, {
      "id": 9,
      "name": "Getafe"
  }, {
      "id": 10,
      "name": "Granada"
  }, {
      "id": 316,
      "name": "Huesca"
  }, {
      "id": 12,
      "name": "Levante"
  }, {
      "id": 50,
      "name": "Osasuna"
  }, {
      "id": 15,
      "name": "Real Madrid"
  }, {
      "id": 16,
      "name": "Real Sociedad"
  }, {
      "id": 17,
      "name": "Sevilla"
  }, {
      "id": 19,
      "name": "Valencia"
  }, {
      "id": 317,
      "name": "Valladolid"
  }, {
      "id": 20,
      "name": "Villarreal"
  }
]
  }
}

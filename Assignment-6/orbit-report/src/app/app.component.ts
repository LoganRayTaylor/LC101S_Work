import { Satellite } from './satellite';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          for (let i of fetchedSatellites) {
            console.log([i])
          }
          let skills = {
          name: "j"
          }
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          let Satellite_object = new Satellite(fetchedSatellites.name, fetchedSatellites.type, fetchedSatellites.launchDate, fetchedSatellites.orbitType, fetchedSatellites.operational);
          //console.log(Satellite_object)
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
          this.sourceList.push(Satellite_object);
       }.bind(this));
    }.bind(this));
 
 }
 sourceList: Satellite[];
  }

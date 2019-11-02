import { Component } from '@angular/core';
import { Satellite } from './satellite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayList: Satellite[];
  sourceList: Satellite[];
  title = 'orbit-report';
  constructor() {
    this.sourceList = [];
    this.displayList = [];
    
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          for (let i = 0; i < fetchedSatellites.length; i++) {
          let Satellite_object = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          this.sourceList.push(Satellite_object);
          }// make a copy of the sourceList to be shown to the user
          this.displayList = this.sourceList.slice(0);
          
          //let skills = {
            //name: "test"
          //}
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          //let Satellite_object = new Satellite(fetchedSatellites.name, fetchedSatellites.type, fetchedSatellites.launchDate, fetchedSatellites.orbitType, fetchedSatellites.operational);
          //"satellites is list of satellite"
          //console.log(Satellite_object)
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
          
        }.bind(this));
      }.bind(this));
    }
      search(searchTerm: string): void {
        const matchingSatellites: Satellite[] = [];
        searchTerm = searchTerm.toLowerCase();
        for (let i = 0; i < this.sourceList.length; i++) {
          const name = this.sourceList[i].name.toLowerCase();
          if (name.indexOf(searchTerm) >= 0) {
            matchingSatellites.push(this.sourceList[i]);
          }
        }
        //displaylist is searchlist
        // let s = sourceList
        this.displayList = matchingSatellites;
    }
  }

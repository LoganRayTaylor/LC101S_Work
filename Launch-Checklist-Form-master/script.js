// Write your JavaScript code here!

// This block of code shows how to format the HTML once you fetch some planetary JSON!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         console.log(json);
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
        let data = json;
         div.innerHTML = `
         <h2>Mission Destination</h2><ol>
         <li>Name:${data.name}</li> 
         <li>Diameter: ${data.diameter}</li>
         <li>Star: ${data.star}</li>
         <li>Distance from Earth: ${data.distance}</li>
         <li>Number of Moons: ${data.moons}</li>
         <img src=${"https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg"}
         </ol>
         `
    
    })
    })
    });
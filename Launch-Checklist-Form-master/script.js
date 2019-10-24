// Write your JavaScript code here!

// This block of code shows how to format the HTML once you fetch some planetary JSON!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         //console.log(json);
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
        let data = json;
        console.log(data);
         div.innerHTML = `
         <ul>
         <h2>Mission Destination</h2><ol>
         <li>Name: ${data[3].name}</li> 
         <li>Diameter: ${data[3].diameter}</li>
         <li>Star: ${data[3].star}</li>
         <li>Distance from Earth: ${data[3].distance}</li>
         <li>Number of Moons: ${data[3].moons}</li>
         <img src=${"https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg"}
         </ul>
         </ol>
         `
    
    })
    })
    });
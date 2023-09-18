// SideNavBar

document.getElementById("opennav").addEventListener("click",function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("opennav").style.visibility = "hidden"
    document.body.style.backgroundColor = "rgba(0,0,0,0.1)"
})

document.getElementById("closebtn").addEventListener("click",function(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("opennav").style.visibility = "visible"
    document.body.style.backgroundColor = ""
})

// Barber List

var arrays = [
    {
      name: "Khid",
      image: "images/khidProfile.jpg",
      para: "@pukaywak_kid"
    },
    {
      name: "Nicc",
      image: "images/nicProfile.jpg",
      para: "@36nicc"
    },
    {
      name: "Elfi",
      image: "images/elfiProfile.jpg",
      para: "@elfimnf"
    }
  ];

  

var arrayListDiv = document.getElementById("arrayList");

// Loop through the list of arrays
for (var i = 0; i < arrays.length; i++) {
  // Create a new unordered list element for each array
  var barberDiv = document.createElement("div");
  barberDiv.className = "barber-container";
  var ul = document.createElement("ul");

  // Create a list item for the array name
  var nameLi = document.createElement("li");
  nameLi.appendChild(document.createTextNode(arrays[i].name));
  ul.appendChild(nameLi);

  // Create an image element for the array image
  var imageLi = document.createElement("li");
  var image = document.createElement("img");
  image.src = arrays[i].image;
  imageLi.appendChild(image);
//   imageLi.appendChild(document.createTextNode(arrays[i].para));
  ul.appendChild(imageLi);



    var paraLi = document.createElement("li");
    var para = document.createElement("p");
    paraLi.className = "barberPara"
    paraLi.appendChild(document.createTextNode(arrays[i].para));
    ul.appendChild(paraLi);

  // Append the unordered list to the div
  barberDiv.appendChild(ul);

  arrayListDiv.appendChild(barberDiv);
}
// End of List of Our Barbers

var openingHour = [
  {
    day: "Monday",
    time: "close"
  },
  {
    day: "Tuesday",
    time: "3pm to 10pm"
  },
  {
    day: "Wednesday",
    time: "3pm to 10pm"
  },
  {
    day: "Thursday",
    time: "3pm to 10pm"
  },
  {
    day: "Friday",
    time: "3pm to 10pm"
  },
  {
    day: "Saturday",
    time: "12pm to 10pm"
  },
  {
    day: "Sunday",
    time: "12pm to 10pm"
  },
]


var lastContainer = document.getElementById("lastContainer");

var lastContainerHeading = document.createElement("h3");
lastContainerHeading.appendChild(document.createTextNode("Opening Hours"));
lastContainer.appendChild(lastContainerHeading);


var locationHeading = document.createElement("h3");
locationHeading.appendChild(document.createTextNode("Location"));
var locationPara = document.createElement("p");
locationPara.appendChild(document.createTextNode("1 Marne Road, #01-01, Singapore"));
locationHeading.className = "locationHeading";
locationPara.className = "locationHeading"
// lastContainer.appendChild(locationHeading);
lastContainer.appendChild(locationPara);

for (var i = 0; i < openingHour.length; i++) {
  // Create a new unordered list element for each array
  var openingHourDiv = document.createElement("div");
  openingHourDiv.className = "openingHour";
  var innerHourDiv = document.createElement("div");
  innerHourDiv.className = "openingHourContainer";
  var ul = document.createElement("ul");


  var dayLi = document.createElement("li");
  dayLi.appendChild(document.createTextNode(openingHour[i].day));
  ul.appendChild(dayLi);

  var timeLi = document.createElement("li");
  timeLi.appendChild(document.createTextNode(openingHour[i].time));
  ul.appendChild(timeLi);

  innerHourDiv.appendChild(ul);

  openingHourDiv.appendChild(innerHourDiv);

  lastContainer.appendChild(openingHourDiv);

}
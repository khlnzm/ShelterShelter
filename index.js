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

// End of SideNavBar

// Main Page Photo

var container = document.getElementById("front-photo");
var image = document.createElement("img");
image.src = "images/backgroundPhoto.jpg";
image.className = "front-photo";
container.appendChild(image);


var secondContainer = document.getElementById("second-container");
var innerText = document.getElementById("innerDiv")

var image1 = document.createElement("img");
var image2 = document.createElement("img");
var headingText = document.createElement("h3");
var paraText = document.createElement("p");
var paraText1 = document.createElement("p");

image1.src ="images/barberLight.jpg";
image2.src ="images/barberTable.jpg";
headingText.textContent = "Seek Fcking Shelter!";
paraText.textContent = "ShelterShelter has been established since 2019. Our main goal for this barber is to serve the community. ";
paraText1.textContent = "ShelterShelter, a no muss, no fuss place for the finest cuts and lusterless banter. Where we take our service seriously, and ourselves not so much."

image1.className = "image12";
image1.classList.add("col", "sqs-col-4", "span-4");
image2.className = "image12";
image2.classList.add("col", "sqs-col-4", "span-4");

headingText.className = "innerText";
paraText.className = "innerText";
paraText1.className = "innerText";
innerText.classList.add("col", "sqs-col-4", "span-4");

secondContainer.appendChild(image1);
secondContainer.appendChild(image2);
secondContainer.appendChild(innerText);
innerText.appendChild(headingText);
innerText.appendChild(paraText);
innerText.appendChild(paraText1);

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

// var locationDiv = document.createElement("div");
// locationDiv.className = "locationDiv";
// var locationTitle = document.createElement("h3");
// locationTitle.appendChild(document.createTextNode("Location"));
// lastDiv.appendChild(locationTitle);
// lastContainer.appendChild(lastDiv);

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


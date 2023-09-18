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


// Array of pictures and prices

var storesAndPrices = [
  {
    name: "Matte Pomade",
    image: "images/oliveUppercut.jpg",
    para: "$35.00"
  },
  {
    name: "Deluxe Pomade",
    image: "images/redUppercut.jpg",
    para: "$35.00"
  },
  {
    name: "FeatherWeight Pomade",
    image: "images/whiteUppercut.jpg",
    para: "$35.00"
  },
  {
    name: "Foam Tonic",
    image: "images/sprayUppercut.jpg",
    para: "$30.00"
  },
  {
    name: "Styling Powder",
    image: "images/powderUppercut.jpg",
    para: "$30.00"
  }
];

var lastContainer = document.getElementById("products");

for (var i = 0; i < storesAndPrices.length; i++) {
  // Create a new unordered list element for each array
  var productsDiv = document.createElement("div");
  productsDiv.className = "productsDiv";
  var ul = document.createElement("ul");

  var pomadeName = document.createElement("li");
  pomadeName.className = "pomadeName"
  pomadeName.appendChild(document.createTextNode(storesAndPrices[i].name));
  ul.appendChild(pomadeName);

  var pomadeImage = document.createElement("li");
  var image = document.createElement("img");
  image.className = "pomadeImage";
  image.src = storesAndPrices[i].image;
  pomadeImage.appendChild(image);
  ul.appendChild(pomadeImage);

  var pomadePrice = document.createElement("li");
  pomadePrice.className = "pomadePrice";
  pomadePrice.appendChild(document.createTextNode(storesAndPrices[i].para));
  ul.appendChild(pomadePrice)

  productsDiv.appendChild(ul);

  lastContainer.appendChild(productsDiv);
}




// Opening Hours

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
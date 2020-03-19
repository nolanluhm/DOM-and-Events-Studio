// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {

});

let rocketImg = document.getElementById("rocket");
    rocketImg.style.position = "absolute";
    rocketImg.style.left = "0px";
    rocketImg.style.bottom = "0px";

let takeoffButton = document.getElementById("takeoff");
let landButton = document.getElementById("landing");
let abortMissionButton = document.getElementById("missionAbort");

let upButton = document.getElementById("up");

let shuttleStatus = document.getElementById("flightStatus");
let shuttleBackground = document.getElementById("shuttleBackground");
let shuttleHeight = document.getElementById("spaceShuttleHeight");


takeoffButton.addEventListener("click", function() {
    let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (result) {

        shuttleStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.background = "blue";
        let newShuttleHeight = (Number(shuttleHeight.innerHTML) + 10000);
        shuttleHeight.innerHTML = "" + newShuttleHeight;
    }
});

landButton.addEventListener("click", function() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    shuttleStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.background = "green";
    shuttleHeight.innerHTML = 0;
});

abortMissionButton.addEventListener("click", function() {
    let result = window.confirm("Confirm that you want to abort the mission.");

    if (result) {
        shuttleStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.background = "green";
        shuttleHeight.innerHTML = 0;
    }
});

// upButton.addEventListener("click", function() {
    
// })




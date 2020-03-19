// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    let rocketImg = document.getElementById("rocket");
    let takeoffButton = document.getElementById("takeoff");
    let shuttleStatus = document.getElementById("flightStatus")
});

takeoffButton.addEventListener("click", function() {
    let result = window.confirm("Confirm that the shuttle is ready for takeoff.");

    if (result) {
        flightStatus.innerHTML = "Shuttle in flight.”;
    }
});



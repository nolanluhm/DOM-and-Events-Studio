// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    let rocketImg = document.getElementById("rocket");
        rocketImg.style.position = "absolute";
        rocketImg.style.left = "0px";
        rocketImg.style.bottom = "0px";

    let takeoffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortMissionButton = document.getElementById("missionAbort");

    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");

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
            rocketImg.style.bottom = String(parseInt(rocket.style.bottom, 10) + 10) + 'px';
        }
    });

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        shuttleStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        shuttleHeight.innerHTML = 0;
        rocketImg.style.position = "absolute";
        rocketImg.style.left = "0px";
        rocketImg.style.bottom = "0px";
    });

    abortMissionButton.addEventListener("click", function() {
        let result = window.confirm("Confirm that you want to abort the mission.");
        if (result) {

            shuttleStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = "green";
            shuttleHeight.innerHTML = 0;
            rocketImg.style.position = "absolute";
            rocketImg.style.left = "0px";
            rocketImg.style.bottom = "0px";
        }
    });

    upButton.addEventListener("click", function() {
        rocketImg.style.bottom = String(parseInt(rocket.style.bottom, 10) + 10) + 'px';
        newShuttleHeight = (Number(shuttleHeight.innerHTML) + 10000);
        shuttleHeight.innerHTML = "" + newShuttleHeight;
    });

    downButton.addEventListener("click", function() {
        rocketImg.style.bottom = String(parseInt(rocket.style.bottom, 10) - 10) + 'px';
        newShuttleHeight = (Number(shuttleHeight.innerHTML) - 10000);
        shuttleHeight.innerHTML = "" + newShuttleHeight;
    });

    leftButton.addEventListener("click", function() {
        rocketImg.style.left = String(parseInt(rocket.style.left, 10) - 10) + 'px';
    });

    rightButton.addEventListener("click", function() {
        rocketImg.style.left = String(parseInt(rocket.style.left, 10) + 10) + 'px';
    });
});








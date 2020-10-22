window.addEventListener("load", function() {

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
        rocket.style.left = "107px";
        rocket.style.bottom = "0px";
        rocket.style.position = "absolute";

    takeoff.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";            
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
            rocket.style.bottom = (parseInt(rocket.style.bottom) + 10) + 'px';
        }
    });

    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.bottom = "0px";
        rocket.style.left = "107px";
    });

    missionAbort.addEventListener("click", function() {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.bottom = "0px";
            rocket.style.left = "107px";
        }
    });

    up.addEventListener("click", function() {
        if (parseInt(rocket.style.bottom) < 240) {
            rocket.style.bottom = (parseInt(rocket.style.bottom) + 10) + 'px';
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    down.addEventListener("click", function() {
        if (parseInt(rocket.style.bottom) > 0) {
            rocket.style.bottom = (parseInt(rocket.style.bottom) - 10) + 'px';
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
        }
    });

    left.addEventListener("click", function() {
        if (parseInt(rocket.style.left) > 0) {
            rocket.style.left = (parseInt(rocket.style.left) - 10) + 'px';
        }
    });

    right.addEventListener("click", function() {
        if (parseInt(rocket.style.left) < 227) {
            rocket.style.left = (parseInt(rocket.style.left) + 10) + 'px';
        }
    });
});








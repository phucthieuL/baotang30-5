const track = document.querySelector("#slider")

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {

    if (track.dataset.mouseDownAt === "0") return;

    //mouse Delta is a difference between current mouse position and previous mouse position
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        //maxDelta is max width that we can slide to
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        nextPercentage = Math.min(nextPercentage, 0)
        nextPercentage = Math.max(nextPercentage, -100)

    track.dataset.percentage = nextPercentage;

    //Change style of track
    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    //Paralax efect
    for(const image of track.querySelectorAll("img")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}
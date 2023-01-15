var xRaySection = document.querySelector(".js-x-ray-section");
var xRayTarget = document.querySelector(".js-img-box__in");
xRaySection.addEventListener('mousemove', (e) => {
    var x = e.offsetX;
    var y = e.offsetY;

    xRayTarget.style.clipPath = `circle(30px at ${x}px ${y}px)`;
    console.log(xRayTarget);
})
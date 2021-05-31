const xyz = document.getElementById('selfie');

function mouseClick() {
    alert('This is me!');
}

xyz.addEventListener('click', mouseClick); 

function mouseOver() {
    xyz.style.color = "white";
}

xyz.addEventListener('mouseenter', mouseOver);

function mouseLeave() {
    xyz.style.color = "rgb(169, 178, 216)"
}

xyz.addEventListener('mouseleave', mouseLeave);

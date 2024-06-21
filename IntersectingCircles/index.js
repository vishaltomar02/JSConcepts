console.log("Hello world!");



function getRandomRadius(maxLimit) {
  return Math.round(Math.random() * maxLimit);
}

function checkIfIntersectingOrNot(circlesData) {
  console.log("circlesData", circlesData);

  const [circle1, circle2] = circlesData;

  // Possible cases to intersect are only 4
  console.log(circle1, circle2);
  const dx = circle1.centerCoords[0] - circle2.centerCoords[0];
  const dy = circle1.centerCoords[1] - circle2.centerCoords[1];

  const distance = Math.round(Math.sqrt(dx * dx + dy * dy));
  console.log(dx, dy, distance);
  if (distance <= circle1.radius + circle2.radius) {
    console.log("INTERSECTING");
    return;
  }
  console.log("NOT INTERSECTING")

}

function handleCircleCreation(e) {
  console.log(e.clientX, e.clientY);
  const currCircles = document.querySelectorAll(".circle");
  if (currCircles.length > 1) {
    currCircles.forEach((item) => {
      document.body.removeChild(item);
    });
  }
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const radius = getRandomRadius(100);
  if (currCircles.length === 1) {
    const { bottom, top, left, right } = currCircles[0].getBoundingClientRect();
    const prevCircleCoords = {
      radius: (bottom - top) / 2,
      centerCoords: [left + (bottom - top) / 2, top + (bottom - top) / 2]
    }
    checkIfIntersectingOrNot([prevCircleCoords, { radius, centerCoords: [e.clientX, e.clientY] }])
  }
  console.log("radius", radius);
  circle.style.top = e.clientY + "px";
  circle.style.left = e.clientX + "px";
  circle.style.width = radius * 2 + "px";
  circle.style.height = radius * 2 + "px";
  document.body.append(circle);
}

document.addEventListener("click", handleCircleCreation)
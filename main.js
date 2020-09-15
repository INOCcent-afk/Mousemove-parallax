const container = document.getElementById("container");
const bago = document.querySelector(".new");
window.onmousemove = (e) => {
  let x = -e.pageX / 5,
    y = -e.pageY / 5;
  container.style.backgroundPositionX = x + "px";
  container.style.backgroundPositionY = y + "px";
};

const el = document.querySelector("#hoverzoom");

/* for click-to-zoom // add class .zooming to CSS
hoverZoom.addEventListener("click", (e) => {
  hoverZoom.style.setProperty('--x', parseInt(-e.offsetX / 2) + "px");
  hoverZoom.style.setProperty('--y', parseInt(-e.offsetY / 2) + "px");
  $("#hoverzoom .slick-slide.slick-current.slick-active").toggleClass("zooming");
  
});
*/

el.addEventListener("mousemove", (e) => {
  el.style.setProperty('--x', -e.offsetX + "px");
  el.style.setProperty('--y', -e.offsetY + "px");
});

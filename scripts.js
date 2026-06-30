const menu = document.querySelector(".button-menu")
const sideMenu = document.querySelector("ul")

function showMenu() {
  const isOpen = sideMenu.style.transform === "translateX(0%)";

  if (isOpen) {
    sideMenu.style.transform = "translateX(-100%)"
  }
  else { sideMenu.style.transform = "translateX(0%)" }
}


menu.addEventListener("click", showMenu)


function openCalendar() {
  Calendly.initPopupWidget({
    url: 'https://calendly.com/bruno-rivaroli26'
  });
  return false;
}

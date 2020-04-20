let anchors = document.querySelectorAll("a[href*='#']"),
    menu = document.querySelector("#menu"),
    close = document.querySelector("#close"),
    navHidden = document.querySelector("#navHidden");


for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      
      let block = anchor.getAttribute("href").substr(1);
      
      document.getElementById(block).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
}

menu.addEventListener("click", () => {
  navHidden.style.display = "flex";
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  navHidden.style.display = "none";
  close.style.display = "none";
  menu.style.display = "block";

});
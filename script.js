const common = document.querySelectorAll(".common");

// Event Listener
common.forEach((div) => {
  div.addEventListener("click", (e) => {
    common.forEach((el) => {
      // console.log(el.classList.contains("grow"));
      if (el.classList.contains("grow")) {
        el.classList.remove("grow");
        el.children[0].style.fontSize = "0em";
      }
    });

    div.classList.add("grow");
    div.children[0].style.fontSize = "2em";
  });
});

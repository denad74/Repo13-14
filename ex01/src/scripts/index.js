var btns = document.querySelectorAll("[data-target]");
var close_btns = document.querySelectorAll(".modal-btn");
var overlay = document.querySelector("#overlay")

btns.forEach( function(btn) {
    btn.addEventListener("click", function() {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});

close_btns.forEach( function(btn) {
    btn.addEventListener("click", function() {
        document.querySelector(btn.dataset.target).classList.remove("active");
        overlay.classList.remove("active");
    });
});

window.onclick = function(e) {
  if(e.target == overlay) {
      var modals = document.querySelectorAll(".modal");
      modals.forEach( function(modal) {
          modal.classList.remove("active");
          overlay.classList.remove("active");
      })
  }
};

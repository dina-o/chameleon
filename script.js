$(document).mousemove(function(e) {
    $("#follow").css({
      left: e.pageX,
      top: e.pageY
    });
  });

 document.querySelectorAll("div").forEach((node) => {

    const chamCol = window.getComputedStyle(node)

  node.onmouseenter = function () {
    $("#outline-colour").css({ fill: `${chamCol.getPropertyValue("background-color")}` });
  };

  node.onmouseleave = function () {
    $("#outline-colour").css({ fill: "black" });
  };


});

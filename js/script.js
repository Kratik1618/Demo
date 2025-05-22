$(document).ready(function () {
  $("#meet_room").on("click", function () {
    $(this).hide();
    $("#videoOverlay").fadeIn(200, function () {
      var video = document.getElementById("fullscreenVideo");
      video.currentTime = 0;
      video.play();
    });
  });

 
  document
    .getElementById("fullscreenVideo")
    .addEventListener("ended", function () {
      $("#videoOverlay").fadeOut(0, function () {
        $("#imageOverlay").fadeIn(0);
      });
    });

  var lastVideoSrc = "";
  $("#playVideoBtn").on("click", function (e) {
    e.stopPropagation();
    $("#imageOverlay").fadeOut(0, function () {
      var video = document.getElementById("fullscreenVideo");
      var source = video.querySelector("source");
      video.pause();
      video.currentTime = 0;
      source.setAttribute("src", "videos/vid_002.mp4");
      video.load();
      $("#videoOverlay").fadeIn(0, function () {
        video.play();
      });
    });
  });

  const viewer360Images = [];
  for (let i = 0; i < 120; i++) {
    const num = i.toString().padStart(5, "0");
    viewer360Images.push(
      `./360 Turn Table/Protection Box Turn Table_${num}.png`
    );
  }

  $("#viewer360Slider").on("input", function () {
    const idx = parseInt(this.value, 10);
    $("#viewer360Image").attr("src", viewer360Images[idx]);
  });

  function show360Viewer() {
    $("#viewer360Slider").val(0);
    $("#viewer360Image").attr("src", viewer360Images[0]);
    $("#viewer360Overlay").fadeIn(0);
  }

  document
    .getElementById("fullscreenVideo")
    .addEventListener("ended", function () {
      var video = document.getElementById("fullscreenVideo");
      var source = video.querySelector("source");
      if (source.getAttribute("src") === "videos/vid_002.mp4") {
        $("#videoOverlay").fadeOut(0, function () {
          show360Viewer();
        });
      } else {
        $("#videoOverlay").fadeOut(0, function () {
          $("#imageOverlay").fadeIn(0);
        });
      }
    });

  $("#close360Btn").on("click", function () {
    $("#viewer360Overlay").fadeOut(200);
  });

  $("#goBackBtn").on("click", function () {
    $("#imageOverlay").fadeOut(200, function () {
      var video = document.getElementById("fullscreenVideo");
      var source = video.querySelector("source");
      video.pause();
      video.currentTime = 0;
      source.setAttribute("src", "videos/vid_001.mp4");
      video.load();
      $("#meet_room").show();
    });
  });
});

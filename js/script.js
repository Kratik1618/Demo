$(document).ready(function () {
  $("#meet_room").on("click", function () {
    $(this).hide();
    $("#videoOverlay").fadeIn(200, function () {
      var video = document.getElementById("fullscreenVideo");
      video.currentTime = 0;
      video.play();
       $('.popup-btns').addClass('visible');
    });
  });

  
 
  document
    .getElementById("fullscreenVideo")
    .addEventListener("ended", function () {
      $("#videoOverlay").fadeOut(0, function () {
        $("#imageOverlay").fadeIn(0, function () {
        $('.popup-btns').addClass('visible');
        });
      });
    });

  var lastVideoSrc = "";
  $(".playVideoBtn").on("click", function (e) {
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
    $("#viewer360Image").hide().fadeIn(600); // Show the 360 image with a smooth fade-in
    $("#viewer360Overlay").fadeIn(0);
  }

  document
    .getElementById("fullscreenVideo")
    .addEventListener("ended", function () {
      var video = document.getElementById("fullscreenVideo");
      var source = video.querySelector("source");
      if (source.getAttribute("src") === "videos/vid_002.mp4") {
        $("#videoOverlay").fadeOut(400, function () {
          $("#viewer360Overlay").fadeIn(400); // Shows the overlay with the image smoothly
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

 $('#viewDemoBtn').on('click', function () {
  $(this).hide();
  $('.rooms').addClass('visible').css('opacity', ''); // Remove inline opacity
});

  // Go Back button logic
  $("#goBackBtn").on("click", function () {
    $("#imageOverlay").fadeOut(200, function () {
      var video = document.getElementById("fullscreenVideo");
      var source = video.querySelector("source");
      video.pause();
      video.currentTime = 0;
      source.setAttribute("src", "videos/vid_001.mp4");
      video.load();
     $('.rooms').removeClass('visible')
      .css('transition', 'none')
      .css('opacity', '0');
    // Force reflow to apply the style immediately
    void $('.rooms')[0].offsetWidth;
    // Restore the transition property
    $('.rooms').css('transition', '');
     $("#viewDemoBtn").show();
      $('#meet_room').show(); // <-- Add this line to show the meeting label again
      
    });
  });

  const productInfo = {
  wireless: {
    title: "Wireless Access Point",
    desc: "Details about the Wireless Access Point go here.",
    img: "images/wireless.png"
  },
  rollingtv: {
    title: "Rolling TV Stand",
    desc: "Details about the Rolling TV Stand go here.",
    img: "images/rollingtv.png"
  },
  // ...add other products
};

$('.popup_lables, .popup-btn').on('click', function() {
  const product = $(this).data('product');
  if (productInfo[product]) {
    $('#productTitle').text(productInfo[product].title);
    $('#productDesc').text(productInfo[product].desc);
    $('#productImage').attr('src', productInfo[product].img || '').attr('alt', productInfo[product].title || '');
    $('#productInfoOverlay').fadeIn();
  }
});

$('#closeProductInfo').on('click', function() {
  $('#productInfoOverlay').fadeOut();
});
 
});



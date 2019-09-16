$(document).ready(function() {

  // $(".item").each(function() {
  //   let el = $('video', this).get(0);
  //   el.currentTime = el.duration - 0.1;
  // })
  $("video").on("loadeddata", function() {

      $(this).css('opacity',1)

  });

  $(".item").hover(hoverVideo, hideVideo);



  $(".item_inner").prepend('<i class="fas fa-infinity"></i>')


  function hoverVideo(e) {
    $('video', this).get(0).play();
    $('i', this).fadeOut();
  }

  function hideVideo(e) {
    let el = $('video', this).get(0);
    el.pause();
    el.currentTime = el.duration - 0.1;
    $('i', this).fadeIn();
    }

});

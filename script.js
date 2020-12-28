$(document).ready(function() {

  // $(".item").each(function() {
  //   let el = $('video', this).get(0);
  //   el.currentTime = el.duration - 0.1;
  // })

  // $("video").on("loadeddata", function() {
  //
  //     $(this).css('opacity',1)
  //
  // });

  // $(".item").hover(hoverVideo, hideVideo);


  $('.item').on('mouseenter', function () {

    $('.item').not(this).find("video").trigger('pause');
    $('.item').not(this).find("i").addClass("fa-play").removeClass("fa-pause");

    $("video", this).trigger('play');
    $("i", this).addClass("fa-pause").removeClass("fa-play");

  });


  $('.item').click(function() {
    $('.item').not(this).find("video").trigger('pause');
    $('.item').not(this).find("i").addClass("fa-play").removeClass("fa-pause");

    let vid = $("video", this).get(0)
    vid[vid.paused ? 'play' : 'pause']();

    if(vid.paused){
      $("i", this).addClass("fa-play").removeClass("fa-pause");
    }else{
      $("i", this).addClass("fa-pause").removeClass("fa-play");
    }

  });

  // $(".item").click(function(){
  //   let overlay = $("<div>",{class:"overlay"})
  //   let container = $("<div>",{class:"container"})
  //   // $("video", this).clone().appendTo( container );
  //
  //   var video = $('<video />', {
  //       src: $("video", this).attr("src"),
  //       type: 'video/mp4',
  //       controls: true,
  //       autoplay: true
  //   });
  //
  //   overlay.append(container)
  //   container.append(video)
  //   $("body").append(overlay)
  //   // $("body").append($(this).clone())
  //
  //   // console.log($("video", this).attr("src"))
  // });


  $(".item_inner").prepend('<i class="fas fa-play"></i>')


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

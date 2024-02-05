let ww = $(window).width();
if (ww > 910) {
  $("html").addClass("pc");
} else {
  $("html").addClass("mobile");
}

$(".slideOuter1 .slideInner").slick({
  autoplaySpeed: 4000,
  speed: 300,
  autoplay: true,
  dots: true,
  arrows: true,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-right"></i></button>',
});

$(".slideOuter1 .plapau i").on("click", function () {
  if ($(this).hasClass("fa-pause")) {
    $(".slideInner").slick("slickPause");
    $(this).removeClass("fa-pause").addClass("fa-play");
  } else {
    $(".slideInner").slick("slickPlay");
    $(this).removeClass("fa-play").addClass("fa-pause");
  }
});

$(".slideOuter2 .slideInner").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  speed: 300,
  autoplay: true,
  dots: false,
  centerMode: true,
  centerPadding: "100px",
  arrows: true,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 911,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
});

// #nav .depth1 > li에 mouseover하면 class "on"을 추가하고
// #nav .depth1 > li에서 mouseout하면 class "on"을 제거하시오.
// $("#nav .depth1 > li").on("mouseover", function () {
//   $(this).addClass("on");
// });
// $("#nav .depth1 > li").on("mouseout", function () {
//   $(this).removeClass("on");
// });

// $("#nav .depth1 > li").hover(
//   function () {
//     $(this).addClass("on");
//   },
//   function () {
//     $(this).removeClass("on");
//   }
// );

$("#nav .depth1 > li").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).toggleClass("on");
  }
});

$("#nav .depth1 > li").on("click", function () {
  if ($("html").hasClass("mobile")) {
    $(this).toggleClass("on");
    $(this).siblings().removeClass("on");
  }
});

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 390,
      settings: {
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
};

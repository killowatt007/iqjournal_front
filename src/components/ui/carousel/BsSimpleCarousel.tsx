import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BsSimpleCarousel.scss'

type Props = {
  slides: {
    image: string,
    textTop?: {
      text: string,
      bgColor: string
    },
    textBottom?: string
  }[]
}

export default function BsSimpleCarousel({slides}: Props) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

  return (
    <div className="bs-simple-carousel">
      <Slider {...settings}>
        {slides.map((slide, i) => {
          return (
            <div
              key={i}
              className="slide"
            >
              <div
                className="inner"
                style={{backgroundImage: `url(${slide.image})`}}
              >
                {/* <img src={slide.image}  /> */}
                {slide.textTop &&
                  <div
                    style={{background: slide.textTop.bgColor}} 
                    className="text-top"
                  >{slide.textTop.text}</div>
                }
                {slide.textBottom &&
                  <div
                    className="text-bottom"
                  >{slide.textBottom}</div>
                }
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
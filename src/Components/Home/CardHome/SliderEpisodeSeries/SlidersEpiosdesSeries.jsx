import React, { Component } from "react";
import Slider from "react-slick";
import"./seserie.css";

export default class Slidereseries extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div class="sliderepisodes">
        <Slider {...settings}>
          
        <div class="sliderepisode">
          <a href="/ked"><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="sliderepisode">
          <a href="/zks"><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="sliderepisode">
          <a href=""><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="sliderepisode">
          <a href=""><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="sliderepisode">
          <a href=""><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="sliderepisode">
          <a href=""><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="sliderepisode">
          <a href=""><img src="./dirilisslide.jpg" /></a>
          </div>
        </Slider>
      </div>
    );
  }
}
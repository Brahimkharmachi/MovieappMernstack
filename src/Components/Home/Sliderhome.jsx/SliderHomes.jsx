import React, { Component } from "react";
import Slider from "react-slick";
import "./sliderhomee.css"

export default class Slidershomes extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div class="sliderhome">
        <Slider {...settings} >
          <div class="slide">
            <a href="/hmzm"><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="slide">
          <a href="/jdj"><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="slide">
          <a href=""><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="slide">
          <a href=""><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="slide">
          <a href=""><img src="./dirilisslide.jpg" /></a>
          </div>
          <div class="slide">
          <a href=""><img src="./dirilisslide.jpg" /></a>
          </div>
        </Slider>
      </div>
    );
  }
}
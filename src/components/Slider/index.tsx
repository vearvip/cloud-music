import React, { useEffect, useState, memo } from 'react';
import { SliderContainer } from './style';
import "swiper/css/swiper.css";
import Swiper from "swiper";

export interface SliderProps {
  bannerList: Array<{
    imageUrl: string
  }>
}
function Slider(props: SliderProps) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;
  // console.log('bannerList', bannerList)

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let sliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });
      setSliderSwiper(sliderSwiper as any);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((slider, index) => {
              console.log('🦕', index)
              return (
                <div className="swiper-slide" key={'slider.imageUrl' + index }>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  );
}

export default memo(Slider);
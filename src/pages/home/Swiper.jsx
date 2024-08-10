import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { StyledSwiper } from './styles';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1picture from '../../assets/home/1.png';
import slide2picture from '../../assets/home/2.png';

export default function SwiperSection() {
  return (
    <>
      <StyledSwiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="imgBox">
            <img src={slide1picture} alt="hand for writing" />
          </div>
          <div>
            <h1 className="title">글로 풀어내는 일상의 감정들</h1>
            <p className="content">매일 제공되는 글감을 선택해 글을 쓰고 </p>
            <p className="content">감정을 기록하며 나를 돌아보세요.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgBox">
            <img src={slide2picture} alt="two hand" />
          </div>
          <div>
            <h1 className="title">공감과 위로의 공간</h1>
            <p className="content">글을 통해 사람들과 소통하고</p>
            <p className="content">따듯한 마음을 느껴보세요.</p>
          </div>
        </SwiperSlide>
      </StyledSwiper>
    </>
  );
}

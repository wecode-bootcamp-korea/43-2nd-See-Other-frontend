import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Common from '../../../components/Common/Common';
import { VIDEO } from '../../../assets/VIDEO';

const MainSlide = () => {
  const { IcoMovie } = Common;

  const [isChecked, setIsChecked] = useState(false);
  const videoRef = useRef('');

  const pauseImgHandle = () => {
    setIsChecked(prev => !prev);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <SliderWrap>
      <Slider {...settings}>
        {VIDEO.map(info => (
          <MovieSelectionWrap key={info.id}>
            <Contents>
              <VideoWrap>
                <Video ref={videoRef} src={info.src} />
                <WrapText>
                  <MovieName>{info.name}</MovieName>
                  <DescMovie>{info.description}</DescMovie>
                  <WrapControl>
                    <ControlDetail href="http://ad.cgv.co.kr/click/CGV/CGV_201401/main@MovieSelection2021?ads_id%3d48889%26creative_id%3d70064%26click_id%3d90497%26content_series%3d%26event%3d">
                      상세보기
                      <IcoMovie
                        width="5px"
                        height="8px"
                        margin="3px 0 0 7px"
                        backgroundPosition="-250px 0"
                      />
                    </ControlDetail>
                    <ControlPlay>
                      <ImgChange onClick={pauseImgHandle}>
                        <IcoMovie
                          width="30px"
                          height="30px"
                          backgroundPosition={
                            isChecked ? '-260px 0px' : '-260px -30px'
                          }
                        >
                          재생
                        </IcoMovie>
                      </ImgChange>
                    </ControlPlay>
                  </WrapControl>
                </WrapText>
              </VideoWrap>
            </Contents>
          </MovieSelectionWrap>
        ))}
      </Slider>
    </SliderWrap>
  );
};

const ImgChange = styled.button`
  width: 30px;
  height: 30px;
`;

const SliderWrap = styled.div`
  font-size: 0;
`;

const MovieSelectionWrap = styled.div`
  position: relative;
  height: 498px;
  background-color: black;
  font-size: 0;
`;

const Contents = styled.div`
  width: 980px;
  height: 100%;
  margin: 0 auto;
`;

const VideoWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:before {
    position: absolute;
    left: -1px;
    top: 0px;
    width: 101%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      #000 0%,
      rgba(0, 0, 0, 0.25) 25%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.25) 75%,
      #000 100%
    );
    z-index: 2;
    content: '';
  }
`;

const Video = styled.iframe`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const Source = styled.source``;

const WrapText = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  z-index: 4;
  transform: translateY(-50%);
`;

const MovieName = styled.strong`
  top: 170;
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.45em;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.72);
`;

const DescMovie = styled.p`
  padding-top: 5px;
  color: white;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.72);
  pointer-events: none;
  white-space: pre-line;
`;

const WrapControl = styled.div`
  display: flex;
  padding-top: 18px;
`;

const ControlDetail = styled.a`
  padding: 8px 16px;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  font-size: 12px;
  line-height: 16px;
  text-decoration: none;
`;

const ControlPlay = styled.a`
  display: block;
  height: 30px;
  width: 30px;
  margin-left: 10px;
  padding: -1px 12px -1px 12px;
  border: 1px solid #979797;
  border-radius: 50%;
`;
export default MainSlide;

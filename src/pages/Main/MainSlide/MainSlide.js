import React from 'react';
import Common from '../../../components/Common/Common';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { VIDEO } from '../../../assets/VIDEO';

const MainSlide = () => {
  const { IcoMovie } = Common;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
  };

  return (
    <SliderWrap>
      <Slider {...settings}>
        {VIDEO.map(info => (
          <MovieSelectionWrap key={info.id}>
            <Contents>
              <VideoWrap>
                <Video autoPlay muted>
                  <Source src={info.src} type="video/mp4" />
                </Video>
                <WrapText>
                  <MovieName>{info.name}</MovieName>
                  <DescMovie>{info.description}</DescMovie>
                  <WrapControl>
                    <ControlDetail href="http://ad.cgv.co.kr/click/CGV/CGV_201401/main@MovieSelection2021?ads_id%3d48889%26creative_id%3d70064%26click_id%3d90497%26content_series%3d%26event%3d">
                      상세보기
                      <IcoMovie
                        width="5px"
                        height="8px"
                        backgroundPosition="-250px 0"
                        margin="3px 0 0 7px"
                      />
                    </ControlDetail>
                    <ControlPlay>
                      <IcoMovie
                        width="30px"
                        height="30px"
                        backgroundPosition="-260px 0"
                      >
                        재생
                      </IcoMovie>
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
    content: '';
    width: 101%;
    height: 100%;
    position: absolute;
    left: -1px;
    top: 0px;
    z-index: 2;
    background-image: linear-gradient(
      to right,
      #000 0%,
      rgba(0, 0, 0, 0.25) 25%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.25) 75%,
      #000 100%
    );
  }
`;
const Video = styled.video`
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
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  line-height: 1.45em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.72);
  z-index: 2;
`;

const DescMovie = styled.p`
  padding-top: 5px;
  font-size: 15px;
  color: white;
  line-height: 25px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.72);
  pointer-events: none;
  font-weight: normal;
  white-space: pre-line;
`;
const WrapControl = styled.div`
  padding-top: 18px;
  display: flex;
`;
const ControlDetail = styled.a`
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  line-height: 16px;
  border-radius: 15px;
  padding: 8px 16px;
  color: black;
  text-decoration: none;
`;
const ControlPlay = styled.a`
  margin-left: 10px;
  display: block;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #979797;
  padding: -1px 12px -1px 12px;
`;
export default MainSlide;

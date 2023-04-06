import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import Common from '../../../components/Common/Common';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CsCenter = () => {
  const { ImgGobal } = Common;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <BoxInfo>
      <GroupInfo>
        <BundleInfo>
          <WrapNoti>
            <TitNoti>공지사항</TitNoti>
            <LinkNoti>
              [극장][CGV대구한일] 4/2(일) &#60;2023 대구국제마라톤대회&#62;
              개최에 따른 교통통제 사전안내 件
            </LinkNoti>
            <LinkMore>더보기</LinkMore>
          </WrapNoti>
          <WrapCsCenter>
            <TitNoti>고객센터</TitNoti>
            <AreaCsCenter>
              <BunchCsCenter>02-0000-0000</BunchCsCenter>
              <DescCsCenter>
                고객센터 운영시간 (평일 09:00~18:00)
                <br />
                업무시간 외 자동응답 안내 가능합니다.
              </DescCsCenter>
            </AreaCsCenter>
          </WrapCsCenter>
          <WrapUtil>
            <BtnUtil type="button">FAQ</BtnUtil>
            <BtnUtil type="button">1:1문의</BtnUtil>
            <BtnUtil type="button">대관/단체 문의</BtnUtil>
          </WrapUtil>
        </BundleInfo>
        <BundleIApp>
          <TitApp>앱 다운로드</TitApp>
          <DescApp>SEO 앱에서 더 편리하게 이용하세요</DescApp>
          <LinkApp to="#">
            <ImgGobal src="../../images/App.png" alt="url.com바로가기 QR코드" />
          </LinkApp>
          <DescApp>
            QR코드를 스캔하고
            <br />
            앱설치 페이지로 바로 이동하세요
          </DescApp>
        </BundleIApp>
      </GroupInfo>
      <GroupBnr>
        <div>
          <StyledSlider {...settings}>
            <ImgGobal src="../../../images/theaterfoot1.png" />
            <ImgGobal src="../../../images/theaterfoot2.png" />
          </StyledSlider>
        </div>
      </GroupBnr>
    </BoxInfo>
  );
};
const StyledSlider = styled(Slider)`
  .slick-prev {
    left: -2px !important;
    top: 46%;
    z-index: 1;
  }

  .slick-next {
    right: 8px !important;
    top: 46%;
    z-index: 1;
  }

  .slick-prev::before {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(../images/IcoMovie.svg) no-repeat;
    background-position: 0px -20px;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    text-indent: -9999px;
    vertical-align: top;
  }

  .slick-next::before {
    display: inline-block;
    width: 30px;
    height: 30px;
    font-size: 0;
    line-height: 0;
    background: url(../images/IcoMovie.svg) no-repeat;
    background-position: -30px -20px;
    overflow: hidden;
    text-indent: -9999px;
    vertical-align: top;
  }
`;

const BoxInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: stretch;
  width: 980px;
  margin: 0 auto;
`;

const GroupInfo = styled.div`
  display: flex;
  align-items: center;
  width: 738px;
  padding: 24px 26px 20px 40px;
  border: 1px solid #dedede;
  border-radius: 10px;
  box-sizing: border-box;
`;

const BundleInfo = styled.div`
  width: 410px;
  padding-right: 40px;
  border-right: 1px solid #dedede;
`;

const WrapNoti = styled.div`
  display: flex;
  align-items: center;
  width: 410px;
  padding-bottom: 25px;
`;

const TitNoti = styled.strong`
  font-size: 16px;
  color: #222;
  font-weight: normal;
  line-height: 22px;
`;

const LinkNoti = styled(Link)`
  max-width: 240px;
  padding-left: 10px;
  color: #888;
  font-size: 15px;
  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LinkMore = styled(Link)`
  margin-left: auto;
  padding: 8px 15px;
  color: #222;
  font-size: 13px;
  border: 1px solid #dedede;
  border-radius: 15px;
  text-decoration: none;
`;

const WrapCsCenter = styled.div`
  display: flex;
  padding-top: 25px;
  border-top: 1px solid #dedede;
`;

const AreaCsCenter = styled.div`
  padding-left: 20px;
`;

const BunchCsCenter = styled.strong`
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
`;

const DescCsCenter = styled.p`
  padding-top: 10px;
  color: #555;
  font-size: 14px;
  line-height: 22px;
`;

const WrapUtil = styled.div`
  margin-left: -5px;
  padding-top: 20px;
`;

const BtnUtil = styled.button`
  margin: 0 5px;
  padding: 7px 12px;
  color: #222;
  background-color: #f2f2f2;
  border-radius: 5px;
  font-size: 14px;
`;

const BundleIApp = styled.div`
  width: 100%;
  padding-left: 30px;
  text-align: center;
`;

const TitApp = styled.strong`
  display: block;
`;

const DescApp = styled.p`
  padding-top: 10px;
  color: #555;
  font-size: 12px;
  line-height: 18px;
`;

const LinkApp = styled(Link)`
  display: block;
  width: 60px;
  margin: 15px auto 5px;
`;

const GroupBnr = styled.div`
  width: 225px;
  height: 259px;
  border-radius: 10px;
  overflow: hidden;
`;

export default CsCenter;

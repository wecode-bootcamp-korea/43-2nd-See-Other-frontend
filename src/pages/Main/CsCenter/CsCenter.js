import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../../components/Common/Common';

const CsCenter = () => {
  const { ImgGobal } = Common;
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
        <ImgGobal src="../../../images/@bnr_226x259.png" />
      </GroupBnr>
    </BoxInfo>
  );
};

const BoxInfo = styled.div`
  display: flex;
  width: 980px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  align-items: stretch;
`;

const GroupInfo = styled.div`
  display: flex;
  align-items: center;
  width: 738px;
  border: 1px solid #dedede;
  padding: 24px 26px 20px 40px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const BundleInfo = styled.div`
  border-right: 1px solid #dedede;
  width: 410px;
  padding-right: 40px;
`;

const WrapNoti = styled.div`
  display: flex;
  width: 410px;
  padding-bottom: 25px;
  align-items: center;
`;

const TitNoti = styled.strong`
  font-weight: normal;
  font-size: 16px;
  color: #222;
  line-height: 22px;
`;

const LinkNoti = styled(Link)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 240px;
  padding-left: 10px;
  color: #888;
  font-size: 15px;
  text-decoration: none;
  white-space: nowrap;
`;

const LinkMore = styled(Link)`
  text-decoration: none;
  color: #222;
  font-size: 13px;
  border: 1px solid #dedede;
  padding: 8px 15px;
  border-radius: 15px;
  margin-left: auto;
`;

const WrapCsCenter = styled.div`
  display: flex;
  border-top: 1px solid #dedede;
  padding-top: 25px;
`;

const AreaCsCenter = styled.div`
  padding-left: 20px;
`;

const BunchCsCenter = styled.strong`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`;

const DescCsCenter = styled.p`
  padding-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #555;
`;

const WrapUtil = styled.div`
  display: fex;
  margin-left: -5px;
  padding-top: 20px;
`;

const BtnUtil = styled.button`
  margin: 0 5px;
  padding: 7px 12px;
  background-color: #f2f2f2;
  font-size: 14px;
  color: #222;
  border-radius: 5px;
`;

const BundleIApp = styled.div`
  padding-left: 30px;
  width: 100%;
  text-align: center;
`;

const TitApp = styled.strong`
  display: block;
`;

const DescApp = styled.p`
  padding-top: 10px;
  font-size: 12px;
  color: #555;
  line-height: 18px;
`;

const LinkApp = styled(Link)`
  display: block;
  width: 60px;
  margin: 15px auto 5px;
`;

const GroupBnr = styled.div`
  overflow: hidden;
  height: 259px;
  border-radius: 10px;
`;

export default CsCenter;

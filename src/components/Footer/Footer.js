import React from 'react';
import styled from 'styled-components';
import SelectOption from '../SelectOption/SelectOption';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfoList>
        {FOOTER_INFO_LIST.map(({ id, contents }) => {
          return <li key={id}>{contents}</li>;
        })}
      </FooterInfoList>
      <CompanyInfoWrap>
        <section>
          <address>
            (04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)
          </address>
          {COMPANY_INFO_LIST.map(({ id, list }) => {
            return (
              <CompanyInfoList key={id}>
                {list.map(({ value, title, content }) => {
                  return (
                    <React.Fragment key={value}>
                      <CompanyInfoTitle>{title}</CompanyInfoTitle>
                      <CompanyInfoContent>{content}</CompanyInfoContent>
                    </React.Fragment>
                  );
                })}
              </CompanyInfoList>
            );
          })}
          <p>&copy;SeeOther. All Rights Reserved</p>
        </section>
        <SelectOption list={FAMILY_SITE_LIST} />
      </CompanyInfoWrap>
      <FloatingBtnWrap>
        <BookingBtn href="/ticket">예매하기</BookingBtn>
      </FloatingBtnWrap>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 50px 0;
  margin-top: 100px;
  background-color: #f8f8f8;
  font-size: 13px;
`;

const FooterInfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto;
  padding-bottom: 28px;
  border-bottom: 1px solid #ebebeb;
`;

const CompanyInfoWrap = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 980px;
  margin: 35px auto 0;
  color: #686868;
  line-height: 1.4;
`;
const CompanyInfoList = styled.dl`
  display: flex;
`;

const CompanyInfoTitle = styled.dt`
  &::after {
    margin: 0px 4px 0px 2px;
    content: ':';
  }
`;

const CompanyInfoContent = styled.dd`
  &::after {
    margin-right: 7px;
    content: ',';
  }
`;

const FloatingBtnWrap = styled.div`
  position: fixed;
  bottom: 10%;
  right: 5%;
`;

const BookingBtn = styled.a`
  padding: 14px 38px;
  border: none;
  color: #fff;
  background: linear-gradient(to left, rgb(255, 115, 86), rgb(251, 67, 87));
  box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  font-size: 15px;
  line-height: 15px;
  text-decoration: none;
  font-weight: 400;
`;

const FOOTER_INFO_LIST = [
  { id: 1, contents: '회사소개' },
  { id: 2, contents: '지속가능경영' },
  { id: 3, contents: 'IR' },
  { id: 4, contents: '채용정보' },
  { id: 5, contents: '광고/제휴/출점문의' },
  { id: 6, contents: '이용약관' },
  { id: 7, contents: '편성기준' },
  { id: 8, contents: '개인정보처리방침' },
  { id: 9, contents: '법적고지' },
  { id: 10, contents: '이메일주소무단수집거부' },
  { id: 11, contents: '윤리경영' },
  { id: 12, contents: '사이버감사실' },
];

const COMPANY_INFO_LIST = [
  {
    id: 1,
    list: [
      { value: 1, title: '대표이사', content: '김승태' },
      {
        value: 2,
        title: '프로젝트등록번호',
        content: '2023-0324-2311',
      },
      {
        value: 3,
        title: '통신판매업신고번호',
        content: '2023-서울강남-1006',
      },
    ],
  },
  {
    id: 2,
    list: [
      {
        value: 1,
        title: '호스팅사업자',
        content: 'SeeOther',
      },
      {
        value: 2,
        title: '개인정보보호 책임자',
        content: 'seeother@gmail.com',
      },
    ],
  },
];

const FAMILY_SITE_LIST = [
  { id: 1, value: 'wevre' },
  { id: 2, value: 'comebackhome' },
  { id: 3, value: 'finding-maewha' },
  { id: 4, value: 'comics-trip' },
];

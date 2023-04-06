import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BnrHead from './BnrHead/BnrHead';
import WrapHead from './WrapHead/WrapHead';
import GroupHead from './GroupHead/GroupHead';
import { APIS } from '../../config';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [ticketInfo, setTicketInfo] = useState({});
  const [endTime, setEndTime] = useState('');
  const userToken = localStorage.getItem('token');
  const navigator = useNavigate();

  const handleModalConfirm = result => {
    const btnText = result.target.textContent;
    if (btnText === '확인') {
      localStorage.removeItem('token');
      localStorage.removeItem('nickname');
      localStorage.removeItem('userAgeRange');
    }
    setIsAccount(prev => !prev);
  };

  const handleAccount = () => {
    if (userToken === null) {
      navigator('/account');
    } else if (userToken) {
      setIsAccount(prev => !prev);
    }
  };

  useEffect(() => {
    fetch(APIS.user, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: userToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        setTicketInfo(data.result.result[0]);
        setEndTime(data.result.endTime);
      });

    function handleScroll() {
      const scrollTop = window.pageYOffset;
      const threshold = 193;
      if (scrollTop > threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [userToken]);

  return (
    <>
      <BnrHead />
      <WrapHead
        handleModalConfirm={handleModalConfirm}
        handleAccount={handleAccount}
        userToken={userToken}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        isAccount={isAccount}
        setIsAccount={setIsAccount}
        ticketInfo={ticketInfo}
        endTime={endTime}
      />
      <GroupHead
        isFixed={isFixed}
        handleModalConfirm={handleModalConfirm}
        userToken={userToken}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        ticketInfo={ticketInfo}
        endTime={endTime}
      />
    </>
  );
};
export default Header;

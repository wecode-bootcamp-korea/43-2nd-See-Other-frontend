import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BnrHead from './BnrHead/BnrHead';
import WrapHead from './WrapHead/WrapHead';
import GroupHead from './GroupHead/GroupHead';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const navigator = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const userToken = localStorage.getItem('token');

  const handleModalConfirm = result => {
    const btnText = result.target.textContent;
    if (btnText === '확인') {
      localStorage.removeItem('token');
      localStorage.removeItem('nickname');
    }
    setIsOpenModal(prev => !prev);
  };

  const handleAccount = () => {
    if (userToken === null) {
      navigator('/account');
    } else if (userToken) {
      setIsOpenModal(prev => !prev);
    }
  };

  useEffect(() => {
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
  }, []);

  return (
    <>
      <BnrHead />
      <WrapHead
        handleModalConfirm={handleModalConfirm}
        handleAccount={handleAccount}
        userToken={userToken}
        isOpenModal={isOpenModal}
      />
      <GroupHead
        isFixed={isFixed}
        handleModalConfirm={handleModalConfirm}
        userToken={userToken}
        isOpenModal={isOpenModal}
      />
    </>
  );
};
export default Header;

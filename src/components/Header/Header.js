import React from 'react';
import { useState, useEffect } from 'react';
import BnrHead from './BnrHead/BnrHead';
import WrapHead from './WrapHead/WrapHead';
import GroupHead from './GroupHead/GroupHead';
import styled from 'styled-components';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

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
      <WrapHead />
      <GroupHead isFixed={isFixed} />
    </>
  );
};
export default Header;

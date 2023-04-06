import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import QuickMenu from './Component/QuickMenu/QuickMenu';
import Theater from './Component/Theater/Theater';
import Seat from './Component/Seat/Seat';
import Modal from '../../components/Modal/Modal';
import { useNavigate } from 'react-router-dom';

const initValue = {
  movie: '',
  korName: '',
  grade: '',
  region: '',
  cinemaName: '',
  hallType: '',
  date: '2023.4.7',
  time: '',
  seat: [],
  totalPrice: '',
  imageUrl: '',
  screeningRoom: '',
};

const Ticket = () => {
  const [selectInfo, setSelectInfo] = useState(initValue);
  const [showTheater, setShowTheater] = useState(true);
  const [newdate, setNewDate] = useState(new Date(Date.parse('2023-04-07')));
  const userToken = localStorage.getItem('token');

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    minimumIntegerDigits: 1,
    useGrouping: false,
  };

  const navigate = useNavigate();

  const handleChange = e => {
    const formattedDate = e.toLocaleDateString('ko-KR', options);
    const saveDate = formattedDate.replace(/\s|\.$/g, '');
    setNewDate(e);
    handleValue('date', saveDate);
  };

  const handleValue = useCallback((key, value) => {
    setSelectInfo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  const changeTicket = () => {
    setShowTheater(!showTheater);
  };

  const resetSelectd = () => {
    setSelectInfo(initValue);
  };
  return (
    <>
      {userToken === null && (
        <Modal
          title="로그인 오류"
          contents="로그인 후 이용해주세요"
          btnContents={['확인']}
          onConfirm={() => {
            navigate('/account');
          }}
        />
      )}
      <TicketWrap>
        <ResetBtn onClick={resetSelectd} selectInfo={selectInfo}>
          옵션 초기화
        </ResetBtn>
        {showTheater ? (
          <Theater
            handleValue={handleValue}
            selectInfo={selectInfo}
            newdate={newdate}
            handleChange={handleChange}
          />
        ) : (
          <Seat handleValue={handleValue} selectInfo={selectInfo} />
        )}
        <QuickMenu
          changeTicket={changeTicket}
          selectInfo={selectInfo}
          showTheater={showTheater}
          resetSelectd={resetSelectd}
        />
      </TicketWrap>
    </>
  );
};

export default Ticket;

const TicketWrap = styled.div`
  position: relative;
  background-color: #f2f0e4;
  width: 996px;
  height: 600px;
  margin: 80px auto 200px;
`;

const ResetBtn = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  width: 100px;
  height: 30px;
  background-color: ${props =>
    props.selectInfo.movie || props.selectInfo.region ? '#333' : '#fff'};
  border-radius: 5px;
  color: #fff;
`;

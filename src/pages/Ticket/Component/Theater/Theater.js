import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import Common from '../../../../components/Common/Common';
import FilterBox from '../FilterBox/FilterBox';
import TicketBtn from '../TicketBtn/TicketBtn';

const Theater = ({ handleValue, selectInfo }) => {
  const { Thead } = Common;
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedRegion, setSelectedRegion] = useState();
  const [selectedCinema, setSelectedCinema] = useState();
  const [selectedTheater, setSelectedTheater] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const handleChange = date => {
    const formattedDate = date.toLocaleDateString('ko-KR');
    setDate(date);
    handleValue('date', formattedDate);
  };

  useEffect(() => {
    fetch('/data/Theaterfilter.json')
      .then(res => res.json())
      .then(datas => {
        setDataList(datas.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>loading</div>;

  return (
    <OptionContainer>
      <OptionBox>
        <Thead>영화</Thead>
        <Tbody>
          <FilterBox />
          <ul>
            {dataList[0].map(list => {
              return (
                <TicketBtn
                  key={list.id}
                  type="movie"
                  {...list}
                  isSelected={selectedMovie === list.name}
                  handleValue={handleValue}
                  handleSelected={() => setSelectedMovie(list.name)}
                />
              );
            })}
          </ul>
        </Tbody>
      </OptionBox>
      <OptionBox>
        <Thead>극장</Thead>
        <Tbody>
          <FilterBox />
          <TheaterBox>
            <RegionList>
              {dataList[1].map(list => {
                return (
                  <TicketBtn
                    key={list.id}
                    type="region"
                    {...list}
                    isSelected={selectedRegion === list.region}
                    handleValue={handleValue}
                    handleSelected={() => setSelectedRegion(list.region)}
                  />
                );
              })}
            </RegionList>
            <CinemaList>
              {dataList[1].map(list => {
                return (
                  selectInfo.region === list.region &&
                  list.cinema.map(cinemaName => {
                    return (
                      <TicketBtn
                        key={cinemaName}
                        type="cinema"
                        cinemaName={cinemaName}
                        isSelected={selectedCinema === cinemaName}
                        handleValue={handleValue}
                        handleSelected={() => setSelectedCinema(cinemaName)}
                      />
                    );
                  })
                );
              })}
            </CinemaList>
            <TheaterList>
              {dataList[2].map(list => {
                return (
                  selectInfo.cinema === list.cinema &&
                  list.theater.map(theaterName => {
                    return (
                      <TicketBtn
                        key={theaterName}
                        type="theater"
                        theaterName={theaterName}
                        isSelected={selectedTheater === theaterName}
                        handleValue={handleValue}
                        handleSelected={() => setSelectedTheater(theaterName)}
                      />
                    );
                  })
                );
              })}
            </TheaterList>
          </TheaterBox>
        </Tbody>
      </OptionBox>
      <OptionBox>
        <Thead>날짜</Thead>
        <StyledCalendar>
          <Calendar
            onChange={handleChange}
            value={date}
            showNeighboringMonth={false}
            prev2Label=""
            next2Label=""
            onClickDay={() => handleValue('date', date)}
          />
        </StyledCalendar>
      </OptionBox>
      <OptionBox>
        <Thead>시간</Thead>
        <Tbody>
          <RunningTime>
            <RunningTimeTitle>
              <TimeType>2D(더빙)</TimeType> 1관 6층
              <SeatCount>(총 158석)</SeatCount>
            </RunningTimeTitle>
            <dd>
              <TicketBtn
                type="time"
                isSelected={selectedTime === '20:45'}
                handleValue={handleValue}
                handleSelected={() => setSelectedTime('20:45')}
                startTime="20:45"
              />
              <span>135석</span>
            </dd>
          </RunningTime>
        </Tbody>
      </OptionBox>
    </OptionContainer>
  );
};

export default Theater;

const OptionContainer = styled.article`
  display: grid;
  grid-template-columns: 22% auto 15% 29%;
  width: 100%;
  height: 600px;
  font-size: 85%;
  font-weight: 300;
`;

const OptionBox = styled.section`
  border-left: 1px solid #d4d3c9;
  background-color: #f2f0e5;
`;

const Tbody = styled.div`
  padding: 20px 15px 10px 15px;
`;
const TheaterBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const RegionList = styled.ul`
  width: 29%;
  height: 487px;
  text-align: center;
  border-right: 1px solid #d4d3c9;
`;

const CinemaList = styled.ul`
  width: 29%;
  height: 487px;
  text-align: center;
  border-right: 1px solid #d4d3c9;
`;

const TheaterList = styled.ul`
  width: 42%;
  height: 487px;
  text-align: center;
`;

const RunningTime = styled.dl`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d4d3c9;
  font-size: 90%;
`;

const RunningTimeTitle = styled.dt`
  margin-bottom: 10px;
  font-weight: bold;
`;

const TimeType = styled.strong`
  color: #b54d15;
`;

const SeatCount = styled.span`
  margin-left: 10px;
  color: #666;
  font-weight: 300;
`;

const StyledCalendar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  .react-calendar {
    width: 100%;
  }

  .react-calendar__navigation {
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 5px;
    border-bottom: 1px solid #d4d3c9;
  }

  .react-calendar__navigation__arrow {
    font-size: 150%;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: none;
  }

  .react-calendar__navigation__label {
    font-size: 120%;
    margin: 3px 12px 0 12px;
  }

  .react-calendar__viewContainer {
    box-sizing: border-box;
    max-height: 487px;
    overflow: scroll;
  }

  .react-calendar__month-view__days {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .react-calendar__month-view__days__day {
    height: 34px;
    margin-left: 0px !important;
    line-height: 34px;
    font-size: 112%;
  }

  .react-calendar__tile--rangeStart {
    background: #e6e4d9;
    width: 100%;
    color: #b54d15;
  }

  .react-calendar__tile:enabled:hover {
    width: 100%;
    color: #b54d15 !important;
    transition: 0.3s;
  }

  .react-calendar__tile--active {
    background: #e6e4d9;
    width: 100%;
    font-size: 130%;
    line-height: 2.5;
    color: #b54d15 !important;
    transition: 0.3s;
  }
`;

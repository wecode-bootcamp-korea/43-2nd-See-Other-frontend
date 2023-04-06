import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import styled from 'styled-components';
import { APIS } from '../../../../config';
import Calendar from 'react-calendar';
import FilterBox from '../FilterBox/FilterBox';
import TicketBtn from '../TicketBtn/TicketBtn';
import Common from '../../../../components/Common/Common';

const Theater = ({ handleValue, handleChange, selectInfo, newdate }) => {
  const { Thead } = Common;
  const { movie, cinemaName, hallType, date, time, seat } = selectInfo;

  const [dataList, setDataList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [timeList, setTimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  const ischecked =
    selectInfo.movie === '' &&
    selectInfo.region === '' &&
    selectInfo.hallType === '' &&
    selectInfo.cinemaName === '';

  const isVisible =
    selectInfo.movie &&
    selectInfo.region &&
    selectInfo.cinemaName &&
    selectInfo.hallType &&
    selectInfo.date;

  useEffect(() => {
    const values = {
      movie,
      cinemaName,
      hallType,
      date,
      time,
      seat,
    };

    const removeSpaces = value => {
      if (typeof value === 'string') {
        return value.replace(/\s/g, '');
      }
      return value;
    };

    const sanitizedValues = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, removeSpaces(value)])
    );

    const queryParams = queryString.stringify(sanitizedValues, {
      skipEmptyString: true,
    });

    ischecked
      ? fetch(APIS.reservationAll)
          .then(res => res.json())
          .then(datas => {
            setDataList(datas.getOptions);
            setFilterList(datas.getOptions);
            setLoading(false);
          })
      : fetch(`${APIS.reservationAll}?${queryParams}`)
          .then(res => res.json())
          .then(datas => {
            setFilterList(datas.getOptions);
            setLoading(false);
          });

    isVisible &&
      fetch(`${APIS.time}?${queryParams}`)
        .then(res => res.json())
        .then(datas => {
          setTimeList(datas.getTimes);
          setLoading(false);
        });
  }, [ischecked, selectInfo]);

  if (loading) return <div>loading</div>;

  return (
    <OptionContainer>
      <OptionBox>
        <Thead>영화</Thead>
        <Tbody>
          <FilterBox />
          <ul>
            {dataList.listMovieOptions.map(list => {
              return (
                <TicketBtn
                  key={list.id}
                  type="movie"
                  {...list}
                  isSelected={selectInfo.korName === list.koreanName}
                  handleValue={handleValue}
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
              {filterList.listRegionOptions.map(list => {
                return (
                  <TicketBtn
                    key={list.id}
                    type="region"
                    {...list}
                    isSelected={selectInfo.region === list.region}
                    handleValue={handleValue}
                  />
                );
              })}
            </RegionList>
            <CinemaList>
              {filterList.listRegionOptions.map(list => {
                return list.cinemaNames.map(cinemaName => {
                  return (
                    selectInfo.region === list.region && (
                      <TicketBtn
                        key={cinemaName}
                        type="cinema"
                        cinemaName={cinemaName}
                        isSelected={selectInfo.cinemaName === cinemaName}
                        handleValue={handleValue}
                      />
                    )
                  );
                });
              })}
            </CinemaList>
            <TheaterList>
              {selectInfo.cinemaName &&
                filterList.listHallTypeOptions.map(list => {
                  return (
                    <TicketBtn
                      key={list.id}
                      type="theater"
                      theaterName={list.name}
                      isSelected={selectInfo.hallType === list.name}
                      handleValue={handleValue}
                    />
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
            value={newdate}
            showNeighboringMonth={false}
            prev2Label=""
            next2Label=""
          />
        </StyledCalendar>
      </OptionBox>
      <OptionBox>
        <Thead>시간</Thead>
        <Tbody>
          {isVisible &&
            timeList.map(
              ({
                screeningRooms,
                hallTypes,
                totalSeats,
                runningTime,
                times,
              }) => {
                return (
                  <RunningTime key={screeningRooms}>
                    <RunningTimeTitle>
                      <TimeType>2D(더빙)</TimeType> {hallTypes} {screeningRooms}
                      관 6층
                      <SeatCount>(총 {totalSeats}석)</SeatCount>
                    </RunningTimeTitle>
                    {times.map(({ startTime, remainingSeats }) => {
                      return (
                        <RunningTimeTxt key={startTime}>
                          <TicketBtn
                            type="time"
                            handleValue={handleValue}
                            isSelected={selectInfo.time === startTime}
                            startTime={startTime}
                            screeningRooms={screeningRooms}
                          />
                          <span>잔여 {remainingSeats}석</span>
                        </RunningTimeTxt>
                      );
                    })}
                  </RunningTime>
                );
              }
            )}
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
  height: 100%;
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

const RunningTimeTxt = styled.dd`
  display: inline-block;
  margin: 8px 15px 0 0;
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

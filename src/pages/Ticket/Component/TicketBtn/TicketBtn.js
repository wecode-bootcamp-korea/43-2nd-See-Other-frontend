import styled from 'styled-components';
import Common from '../../../../components/Common/Common';

const TicketBtn = ({ isSelected, handleSelected, handleValue, ...props }) => {
  const {
    type,
    name,
    grade,
    region,
    cinema,
    cinemaName,
    theaterName,
    startTime,
  } = props;

  const { IcoMovie } = Common;

  const gradeNum = {
    12: '1px -60px',
    15: '-29px -60px',
    19: '-59px -60px',
  };
  return (
    <>
      {type === 'movie' && (
        <MovieName
          draggable={true}
          isSelected={isSelected}
          onClick={() => {
            // TODO : 사용자의 나이가 19세 미만일때 예약 불가능 기능
            // if (grade === 19) {
            //   alert('19세 미만 관람 불가 영화입니다. 로그인을 해주세요');
            // } else {
            handleSelected();
            handleValue('name', name);
            handleValue('grade', grade);
            // }
          }}
        >
          <IcoMovie
            width="30px"
            height="20px"
            backgroundPosition={gradeNum[grade]}
          />
          {name}
        </MovieName>
      )}

      {type === 'region' && (
        <Region
          draggable={true}
          isSelected={isSelected}
          onClick={() => {
            handleSelected();
            handleValue('region', region);
          }}
        >
          {region}({cinema.length})
        </Region>
      )}

      {type === 'cinema' && (
        <TheaterName
          draggable={true}
          isSelected={isSelected}
          onClick={() => {
            handleSelected();
            handleValue('cinema', cinemaName);
          }}
        >
          {cinemaName}
        </TheaterName>
      )}

      {type === 'theater' && (
        <TheaterName
          draggable={true}
          isSelected={isSelected}
          onClick={() => {
            handleSelected();
            handleValue('theater', theaterName);
          }}
        >
          {theaterName}
        </TheaterName>
      )}

      {type === 'time' && (
        <TimeButton
          isSelected={isSelected}
          onClick={() => {
            handleSelected();
            handleValue('time', startTime);
          }}
        >
          {startTime}
        </TimeButton>
      )}
    </>
  );
};

export default TicketBtn;

// useSerchParams;

const MovieName = styled.li`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 5px;
  background-color: ${props => (props.isSelected ? '#e6e4d9' : 'transparent')};
  line-height: 30px;
  cursor: pointer;
`;

const Region = styled.li`
  height: 30px;
  margin: 0 5px 5px 0;
  background-color: ${props => (props.isSelected ? '#e6e4d9' : 'transparent')};
  line-height: 30px;
  cursor: pointer;
`;

const TheaterName = styled.li`
  height: 30px;
  margin: 0 5px 5px 5px;
  padding: 0 10px;
  background-color: ${props => (props.isSelected ? '#e6e4d9' : 'transparent')};
  line-height: 30px;
  cursor: pointer;
`;

const TimeButton = styled.button`
  margin-right: 10px;
  padding: 7px;
  border: 1px solid #d6d3ce;
  background-color: ${props => (props.isSelected ? '#e6e4d9' : 'transparent')};
`;

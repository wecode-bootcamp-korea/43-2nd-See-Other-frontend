import styled from 'styled-components';
import Common from '../../../../components/Common/Common';

const TicketBtn = ({ isSelected, isDisabled, handleValue, ...props }) => {
  const {
    type,
    koreanName,
    name,
    grade,
    region,
    imageUrl,
    cinemaNames,
    cinemaName,
    theaterName,
    startTime,
    screeningRooms,
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
          koreanName={koreanName}
          onClick={e => {
            handleValue('korName', koreanName);
            handleValue('grade', grade);
            handleValue('imageUrl', imageUrl);
            handleValue('movie', name);
            // getFilterList();
          }}
        >
          <IcoMovie
            width="30px"
            height="20px"
            backgroundPosition={gradeNum[grade]}
          />
          {koreanName}
        </MovieName>
      )}

      {type === 'region' && (
        <Region
          draggable={true}
          isSelected={isSelected}
          onClick={() => {
            handleValue('region', region);
            // getFilterList();s
          }}
        >
          {region}({cinemaNames.length})
        </Region>
      )}

      {type === 'cinema' && (
        <TheaterName
          draggable={true}
          isSelected={isSelected}
          onClick={() => {
            handleValue('cinemaName', cinemaName);
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
            handleValue('hallType', theaterName);
          }}
        >
          {theaterName}
        </TheaterName>
      )}

      {type === 'time' && (
        <TimeButton
          isSelected={isSelected}
          onClick={() => {
            handleValue('time', startTime);
            handleValue('screeningRoom', screeningRooms);
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
  padding-left: 5px;
  background-color: ${props => (props.isSelected ? '#e6e4d9' : 'transparent')};
  color: ${props => (props.isSelected ? '#b54d15' : 'e6e4d9')};
  line-height: 30px;
  cursor: pointer;

  &:hover {
    color: #b54d15;
    transition: 0.3s;
  }
`;

const Region = styled.li`
  height: 30px;
  margin: 0 5px 5px 0;
  background-color: ${props => (props.isSelected ? '#e6e4d9' : 'transparent')};
  color: ${props => (props.isSelected ? '#b54d15' : 'e6e4d9')};
  line-height: 30px;
  cursor: pointer;

  &:hover {
    color: #b54d15;
    transition: 0.3s;
  }
`;

const TheaterName = styled.li`
  height: 30px;
  margin: 0 5px 5px 5px;
  padding: 0 10px;
  background-color: ${props => (props.isSelected ? '#e6e4d9' : 'transparent')};
  color: ${props => (props.isSelected ? '#b54d15' : 'e6e4d9')};
  line-height: 30px;
  cursor: pointer;

  &:hover {
    color: #b54d15;
    transition: 0.3s;
  }
`;

const TimeButton = styled.button`
  margin-right: 10px;
  padding: 7px;
  border: 1px solid #d6d3ce;
  background-color: ${props => (props.isSelected ? '#e6e4d9' : 'transparent')};
  color: ${props => (props.isSelected ? '#b54d15' : 'e6e4d9')};

  &:hover {
    color: #b54d15;
    transition: 0.3s;
  }
`;

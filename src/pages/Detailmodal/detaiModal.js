import React from 'react';
import Detail from '../../components/Detail/Detail';
const DetailModal = ({
  isOpenModal,
  setIsOpenModal,
  id,
  koreanName,
  name,
  summary,
  averageRate,
}) => {
  return (
    isOpenModal && (
      <Detail
        setIsOpenModal={setIsOpenModal}
        id={id}
        koreanName={koreanName}
        name={name}
        summary={summary}
        averageRate={averageRate}
      />
    )
  );
};

export default DetailModal;

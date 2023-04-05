import React from 'react';
import Detail from '../Detail';

const DetailModal = ({
  imageUrl,
  isOpenModal,
  setIsOpenModal,
  id,
  koreanName,
  englishName,
  summary,
  averageRating,
  reservationRate,
}) => {
  return (
    isOpenModal && (
      <Detail
        imageUrl={imageUrl}
        setIsOpenModal={setIsOpenModal}
        key={id}
        id={id}
        koreanName={koreanName}
        englishName={englishName}
        summary={summary}
        averageRating={averageRating}
        reservationRate={reservationRate}
      />
    )
  );
};

export default DetailModal;

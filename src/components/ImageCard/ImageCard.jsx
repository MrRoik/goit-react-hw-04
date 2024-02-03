import { useState } from 'react';
import css from './ImageCard.module.css';
import { ImageModal } from '../ImageModal/ImageModal';

export const ImageCard = ({ picSmall, picRegular, description }) => {
  const [winModalIsOpen, setWinModalIsOpen] = useState(false);

  return (
    <div className={css.imageCard}>
      <img
        className={css.img}
        src={picSmall}
        alt={description}
        onClick={() => setWinModalIsOpen(true)}
        loading="lazy"
      />
      <ImageModal
        pic={picRegular}
        isOpen={winModalIsOpen}
        onClose={() => setWinModalIsOpen(false)}
      />
    </div>
  );
};

import css from './ImageCard.module.css';

export const ImageCard = ({ item }) => {
  return (
    <div className={css.imageCard}>
      <img className={css.img} src={item.urls.small} alt={item.alt_description} loading="lazy" />
    </div>
  );
};

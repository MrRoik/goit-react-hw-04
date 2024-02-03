import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.itemImageCard}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard
            picSmall={item.urls.small}
            description={item.alt_description}
            picRegular={item.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
};

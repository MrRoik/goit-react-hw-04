import { Toaster } from 'react-hot-toast';
import css from './App.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorMessage, MessageNotFound } from './ErrorMessage/ErrorMessage';
import { Loader } from './Loader/Loader';
import { fetchPictures } from '../api';
import { nanoid } from 'nanoid';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [visualBtn, setVisualBtn] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const searchPictures = async newQuery => {
    setQuery(`${nanoid()}/${newQuery}`);
    setPage(1);
    setPictures([]);
    setIsEmpty(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchData() {
      try {
        setError(false);
        setLoading(true);
        const { results, total_pages } = await fetchPictures(query.split('/')[1], page);
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setPictures(prevPictures => [...prevPictures, ...results]);
        setVisualBtn(total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBar onSearch={searchPictures} />
      </header>
      {error && <ErrorMessage />}
      {pictures.length > 0 && <ImageGallery items={pictures} />}
      {isEmpty && <MessageNotFound />}
      {loading && <Loader />}
      {visualBtn && <LoadMoreBtn clickBtn={handleLoadMore} />}
      <Toaster position="bottom-center" />
    </div>
  );
};

import { Toaster } from 'react-hot-toast';
import css from './App.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { Loader } from './Loader/Loader';
import { fetchPictures } from '../api';
import { nanoid } from 'nanoid';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

/*import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};*/

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  /*let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  };
  const closeModal = () => {
    setIsOpen(false);
  };*/

  const searchPictures = async newQuery => {
    setQuery(`${nanoid()}/${newQuery}`);
    setPage(1);
    setPictures([]);
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
        const fetchedData = await fetchPictures(query.split('/')[1], page);
        setPictures(prevPictures => [...prevPictures, ...fetchedData]);
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
      {loading && <Loader />}
      {pictures.length > 0 && !loading && <LoadMoreBtn clickBtn={handleLoadMore} />}
      <Toaster position="bottom-center" />
    </div>
  );
};

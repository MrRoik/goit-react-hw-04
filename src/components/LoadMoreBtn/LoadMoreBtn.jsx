import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ clickBtn }) => {
  return (
    <>
      <button onClick={clickBtn} className={css.loadMoreBtn}>
        Load more
      </button>
    </>
  );
};

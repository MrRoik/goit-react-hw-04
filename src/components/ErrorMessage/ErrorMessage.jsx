import { BsEmojiDizzyFill } from 'react-icons/bs';
import { BiSleepy } from 'react-icons/bi';
import css from './ErrorMessage.module.css';

export const ErrorMessage = () => {
  return (
    <>
      <h3 className={css.textError}>Oh, reload the page!</h3>
      <p>
        <BsEmojiDizzyFill className={css.iconError} size="140" />
      </p>
    </>
  );
};

export const MessageNotFound = () => {
  return (
    <>
      <h3 className={css.textError}>
        Oops, unfortunately there is nothing for your request! Try a different name!
      </h3>
      <p>
        <BiSleepy className={css.iconError} size="140" />
      </p>
    </>
  );
};

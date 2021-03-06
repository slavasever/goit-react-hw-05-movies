import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

function SearchForm({ onSubmit, query }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleChange = event => {
    const inputValue = event.currentTarget.value;
    setInputValue(inputValue);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      toast.warning('Please, enter something...');
      return;
    }

    onSubmit(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          value={inputValue}
          className={s.input}
          onChange={handleChange}
        ></input>
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchForm;

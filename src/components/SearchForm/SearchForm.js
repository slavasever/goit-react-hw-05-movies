import { useState } from 'react';
import { toast } from 'react-toastify';

function SearchForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

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
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange}></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchForm;

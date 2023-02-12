import React, { useState } from 'react'


export default function BookCreate({ addBook }) {
  const [book, setBook] = useState("");

  const bookCreate = (event) => {
    event.preventDefault();
    addBook(book);
    setBook('');
  };
  const handleTitleChange = (event) => {
    setBook(event.target.value);
  }
  return (
    <div className='create-book'>
        <form onSubmit={bookCreate}>
            <input className="input is-primary" type="text" value={book} onChange={handleTitleChange} />
            <input className="button is-primary" type="submit" value="Add Book" />
        </form>
    </div>
  )
}

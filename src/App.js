import "./App.css";
import { useState } from "react";
import BookCreate from "./component/BookCreate";
import uuid from "uuid-random";
import BookList from "./component/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (title) => {
    setBooks([...books, { id: uuid(), title }]);
  };

  const removeBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  }

  const updateBook = (id, title) => {
    const newBooks = [...books];
    newBooks.forEach((item) => { if (item.id === id) {
      item.title = title;
    } });
    setBooks(newBooks);
  }
  return (
    <div className="container is-fluid">
      <div className="notification">
        <BookCreate addBook={addBook} />
        No of books {books.length}
        <BookList list={books} removeBook={removeBook} updateBook={updateBook}/>
      </div>
    </div>
  );
}

export default App;

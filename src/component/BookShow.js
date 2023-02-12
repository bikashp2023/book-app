import React, {useState} from "react";

export default function BookShow({ book, removeBook, updateBook }) {

  const [edit, setEdit] = useState(false);
  const [title, setBookTitle] = useState(book.title);

  const deleteBook = (event) => {
    removeBook(book.id);
  }

  const editBook = () => {
    setEdit(!edit);
  }

  const updateBookTitle = () => {
    updateBook(book.id, title);
    setEdit(false);
  }


  const handleBookTitleChange = (event) => {
    setBookTitle(event.target.value);
    updateBook(book.id, title);
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={`https://picsum.photos/seed/${book.id}/300/200`}
            alt="Placeholder image"
          />
        </figure>
        <div className="action-icons">
          { edit ? <button onClick={updateBookTitle}>save</button> :<div onClick={editBook}>Edit</div>}
          <div onClick={deleteBook}>X</div>
        </div>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            { edit ? <input className="title-change" type="text" value={title} onChange={handleBookTitleChange}/> : <p className="title is-4">{book.title}</p> }
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>
      </div>
    </div>
  );
}

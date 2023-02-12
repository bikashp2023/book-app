import React from 'react'
import BookShow from './BookShow'

export default function BookList( {list, removeBook, updateBook}) {
  return (
    <div className='book-list'>
        {list.map((item,index) => <BookShow key={index} book={item} removeBook={removeBook} updateBook={updateBook}/>)}
    </div>
  )
}

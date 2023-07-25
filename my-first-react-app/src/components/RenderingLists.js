import React from 'react'
import Book from './Book.js'


function RenderingLists() {

  const bookList = [
    'To Kill a Mockingbird',
    'The Great Gatsby',
    'The Catcher in the Rye'
  ]

  const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      pages: 201
    },
    {
      title: 'The Great Gatsby',
      author: 'F Scott Fitzgerald',
      pages: 218
    },
    {
      title:  'The Catcher in the Rye',
      author: 'J.D Salinger',
      pages: 234
    }
  ]
  return (
    <div>
      {bookList.map(book => {
        return <h2>{book}</h2>
      })}
      
      <hr/>

      {
        books.map(book => {
          return (
            <div>
                <h5>{book.title}</h5>
                <p>{book.author}</p>
                <p>{book.pages}</p>
            </div>
          )
        })
      }
      <hr />

      {
        books.map(book => {
          return <Book book={book}/>
        })
      }
    </div>
  )
}

export default RenderingLists

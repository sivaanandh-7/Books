import EventExamples from './EventExamples';
import Book from './Book';
import { books } from './books';

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        <EventExamples />
        {books.map((book, index) => (
          <Book {...book} key={book.id} number={index} />
        ))}
      </section>
    </>
  );
};

export default BookList;

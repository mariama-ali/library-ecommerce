import React , {useState} from 'react'
import Book from '../components/ui/Book';

const Books = ({books : initialBooks}) => {
  const [books, setBooks] = useState(initialBooks);

    function filterBooks(filter) {
        switch (filter) {
            case "LOW_TO_HIGH":
                return setBooks(
                    books
                        .slice()
                        .sort(
                            (a, b) =>
                                (a.salePrice || a.originalPrice) -
                                (b.salePrice || b.originalPrice)
                        )
                );
            case "HIGH_TO_LOW":
                return setBooks(
                    books
                        .slice()
                        .sort(
                            (a, b) =>
                                (b.salePrice || b.originalPrice) -
                                (a.salePrice || a.originalPrice)
                        )
                );
            case "RATING":
                return setBooks(books.slice().sort((a, b) => b.rating - a.rating));
            default:
                break;
        }
    }
    return (
        <div id ="books__body">
            <main className="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books__header--title">
                                    All Books</h2>
                                    <select id="filter" defaultValue="DEFAULT" onChange={(e) => filterBooks(e.target.value)}>
                                        <option value="DEFAULT" disabled>Sort</option>
                                        <option value="LOW_TO_HIGH">Price, Low to High</option>
                                        <option value="HIGH_TO_LOW">Price, High to Low</option>
                                        <option value="RATING">Price, Rating</option>
                                    </select>
                            </div>
                            <div className="books">
                                {books.map((book) => 
                                    (<Book book={book} key={book.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Books;

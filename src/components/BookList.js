import React from 'react';
import styled from 'styled-components';
import BookItem from './BookItem';
import { useBookState } from '../BookContext';

const BookListBlock = styled.div`
    padding: 20px 32px;
    overflow-y: auto;
    flex: 1;
`;

const BookList = () => {
    const books = useBookState();
    return (
        <BookListBlock>
            {books.map(book=>(
                <BookItem 
                key={book.id}
                id={book.id}
                title={book.title}
                writer={book.writer}
                year={book.year}
                />
            ))}
        </BookListBlock>
    );
};

export default BookList;
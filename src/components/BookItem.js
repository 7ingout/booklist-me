import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../BookContext';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const BookItemBlock = styled.div `
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
`;
const BookItem = ({id, title, writer, year}) => {
    const dispatch = useTodoDispatch();
    const onRemove = () => dispatch({type:'REMOVE', id:id});
    return (
        <BookItemBlock>
            <div>{title}</div>
            <div>{writer}</div>
            <div>{year}</div>
            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>
        </BookItemBlock>
    );
};

export default BookItem;
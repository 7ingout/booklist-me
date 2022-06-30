import React from 'react';
import styled from 'styled-components';

const HeadBlock = styled.div `
    height: 140px;
    padding: 30px 0;
    background-color: antiquewhite;
    button {
        background-color: black;
        color: white;
        font-size: 14px;
        margin: 0 20px;
        padding: 8px 60px;
        border-radius: 5px;
    }
`;

const BooklistHead = () => {
    return (
        <HeadBlock>
            <h1>booklist</h1>
            <button className='blackBtn'>2022년도</button>
            <button className='blackBtn'>2021년도</button>
            <button className='blackBtn'>2020년도</button>
            <button className='blackBtn'>2019년도</button>
        </HeadBlock>
    );
};

export default BooklistHead;
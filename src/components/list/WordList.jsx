import React from 'react';
import styled from 'styled-components';
import WordDetail from './WordDetail';
import {useSelector } from 'react-redux';


const WordList = () => {
    const wordList = useSelector((state=>state.word.wordList))

    return (
        <WordUl>
            {
                wordList.map((word,idx) =>
                <WordDetail
                    key={idx}
                    word={word}
                    id={word.id}
                    />
                )
            }
        </WordUl>
    );
};

const WordUl = styled.ul`
    width:80%;
    display:flex;
    margin:0 auto;
    flex-wrap: wrap;
    padding:2%;
    `

export default WordList;
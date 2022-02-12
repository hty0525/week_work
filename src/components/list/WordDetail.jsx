import React from 'react';
import styled from 'styled-components';

const WordDetail = ({word})=>{
    return(
        <WordItemWrap>
            <WordItem>
                <p>단어</p>
                <h2>{word.word}</h2>
            </WordItem>
            <WordItem>
                <p>설명</p>
                <h2>{word.desc}</h2>
            </WordItem>
            <WordItem blue>
                <p>예시</p>
                <h2>{word.ex}</h2>
            </WordItem>
        </WordItemWrap>
    )
};

const WordItemWrap = styled.li`
        background:yellow;
        padding:20px;
        border-radius:15px;
        width:47%;
        margin:1.5%;
        ;
    `

const WordItem = styled.div`
    width:100%;
    margin-top:30px;
    p{
        margin-bottom:10px;
    }
    &:first-child{
        margin:0;
    }
    &:last-child{
        h2{
            color:blue;
        }
    }
`


export default WordDetail
import React from 'react';
import styled from 'styled-components';
import AddWord from '../list/AddWord';
import WordList from '../list/WordList';

const Main = () => {
    return (
        <MainWrap>
            <MainHead>
                나만의 사전!
            </MainHead>
            <WordList/>
            <AddWord/>
        </MainWrap>
    );
};

const MainWrap = styled.section`
    width:70%;
    max-width:1200px;
    margin:0 auto;
    padding:100px 0;
    background:powderblue;
    `

const MainHead = styled.h1`
    width:100%;
    text-align:center;
    font-size:2em;
`


export default Main;
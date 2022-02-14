import React from 'react';
import styled from 'styled-components';
import WordList from '../list/WordList';
import {useNavigate} from "react-router-dom"
const Main = () => {
    const navigate = useNavigate()
    const goAdd = ()=>{
        navigate('/add')
    }
    return (
        <MainWrap>
            <MainHead>
                <AddBtn onClick={goAdd}>
                    나만의 사전 추가하기
                </AddBtn>
                나만의 사전!
            </MainHead>
            <WordList/>
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
    position:relative;
    width:70%;
    text-align:center;
    font-size:2em;
    margin:0 auto;
`
const AddBtn = styled.button`
    position:absolute;
    top:0;
    left:0;
    cursor:pointer;
    padding:10px 10px;
    border-radius:5555555555px;
    background:green;
`

export default Main;
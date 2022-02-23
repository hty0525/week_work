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
                    <PlusLine></PlusLine>
                    <PlusLine line="heiht"></PlusLine>
                </AddBtn>
                나만의 사전!
            </MainHead>
            <WordList/>
        </MainWrap>
    );
};

const MainWrap = styled.section`
    width:100%;
    max-width:1200px;
    margin:0 auto;
    padding:100px 0;
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
    right:0;
    cursor:pointer;
    padding:22px;
    border-radius:50%;
    transition:all 0.4s;
    border:3px solid black;
    &:hover{
        transform:scale(1.1) rotate(90deg);
    }
`
const PlusLine = styled.span`
    position:absolute;
    top:50%;
    left:50%;
    width:${props=>props.line? '70%' : '5px'};
    height:${props=>props.line? '5px' : '70%'};
    background:#333;
    transform:translate(-50%,-50%);
`

export default Main;
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteWordMiddle } from '../../store/module/word';
import { useNavigate } from 'react-router-dom';
const WordDetail = ({word})=>{
    const deletePatch = useDispatch()
    const navigate = useNavigate()
    const deleteWord = (e)=>{
        deletePatch(deleteWordMiddle(word.id))
    }
    const editWord = ()=>{
        navigate('/edit', {state:word})
    }
    return(
        <WordItemWrap>
            <WordItem className={word.date}>
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
            <DeleteBtnBox>
                <DetailBtn onClick={deleteWord}>
                    삭제하기
                </DetailBtn>
                <DetailBtn className='editBtn' onClick={editWord}>
                    수정하기
                </DetailBtn>
            </DeleteBtnBox>
        </WordItemWrap>
    )
};

const WordItemWrap = styled.li`
        background:white;
        padding:20px;
        border-radius:15px;
        width:100%;
        margin:1.5%;
        position: relative;
        overflow:hidden;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
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
const DetailBtn = styled.button`
    cursor: pointer;
    border-radius:9999px;
    padding:10px 20px;
    margin:0 20px;
    font-weight:bold;
    transition:all 0.4s;
    background:#eeeeee;
    &:hover{
        background:black;
        color:white;
    }
`

const DeleteBtnBox = styled.div`
    width:100%;
    margin-top:30px;
    button:first-child{
        margin:0;
    }
`


export default WordDetail
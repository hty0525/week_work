import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWordMiddle } from '../../store/module/word';
import { useNavigate } from 'react-router-dom';
const WordDetail = ({word})=>{
    const deletePatch = useDispatch()
    const navigate = useNavigate()
    
    const deleteWord = (e)=>{
        // e.target.parentNode.parentNode.remove()
        deletePatch(deleteWordMiddle(word.id))
    }


    

    const editWord = ()=>{
        navigate('/edit', {state:word})
    }
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
        background:yellow;
        padding:20px;
        border-radius:15px;
        width:47%;
        margin:1.5%;
        position: relative;
        overflow:hidden;
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
    transition:all 4s;
    background:blue;
    &:hover{
        background:red;
        color:red;
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
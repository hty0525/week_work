import React, { useRef } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {createWord,addWordMiddle} from '../../store/module/word'
import { useNavigate } from 'react-router-dom';

const AddWord = ()=>{
    const word = useRef()
    const wordDesc = useRef()
    const wordEx = useRef()
    const navigate = useNavigate()
    const addWord = useDispatch()

    const handleAdd = ()=>{
        const wordVlaue = word.current.value;
        const descVlaue = wordDesc.current.value;
        const exVlaue = wordEx.current.value;
        const wordId = Date.now()
        addWord(addWordMiddle(wordVlaue,descVlaue,exVlaue,wordId))
        navigate('/')
    }
    return(
        <AddWrap onSubmit={handleAdd}>
            <FormBox>
                <label htmlFor="word">
                    단어 <span>(10자 이내로 작성해주세요)</span>
                </label>
                <input id='word' type="text" maxLength={10} ref={word}/>
            </FormBox>
            <FormBox>
                <label htmlFor="wordDesc">
                    설명 <span>(30자 이내로 작성해주세요)</span>
                </label>
                <input id='wordDesc' type="text" maxLength={30} ref={wordDesc}/>
            </FormBox>
            <FormBox>
                <label htmlFor="wordEx">
                    예시 <span>(10자 이내로 작성해주세요)</span>
                </label>
                <input id='wordEx' type="text" maxLength={10} ref={wordEx}/>
            </FormBox>
            <AddBtn onClick={handleAdd}>
                추가버튼
            </AddBtn>
        </AddWrap>
    )
}



const AddWrap = styled.form`
    background:powderblue;
    width:50%;
    margin:0 auto;
    padding:30px;
    border:1px solid red;
`
const FormBox = styled.div`
    label{
        display:block;
        width:100%;
    }
    input{
        width:100%;
        padding:4px 7px;
    }
`
const AddBtn = styled.button`
    cursor:pointer;
`


export default AddWord
import React, { useRef } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {createWord} from '../../store/word'
const AddWord = ()=>{
    const word = useRef()
    const wordDesc = useRef()
    const wordEx = useRef()
    const setWord = useDispatch()


    const handleAdd = (e)=>{
        e.preventDefault()
        const wordVlaue = word.current.value;
        const descVlaue = wordDesc.current.value;
        const exVlaue = wordEx.current.value;
        setWord(createWord([wordVlaue,descVlaue,exVlaue]))
    }
    return(
        <AddWrap onSubmit={handleAdd}>
            <FormBox>
                <label htmlFor="word">
                    단어
                </label>
                <input id='word' type="text" ref={word}/>
            </FormBox>
            <FormBox>
                <label htmlFor="wordDesc">
                    설명
                </label>
                <input id='wordDesc' type="text" ref={wordDesc}/>
            </FormBox>
            <FormBox>
                <label htmlFor="wordEx">
                    예시
                </label>
                <input id='wordEx' type="text" ref={wordEx}/>
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
import React, { useRef } from 'react'
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {createWord} from '../../store/module/word'
import {editWordMiddle} from '../../store/module/word';
import { useNavigate,useLocation } from 'react-router-dom';
const EditWord = ()=>{
    const wordV = useRef()
    const wordDesc = useRef()
    const wordEx = useRef()
    const editWord = useDispatch()
    const navigate = useNavigate()
    const {id,desc,ex,word,date} = useLocation().state;
    console.log(id,desc,ex,word)
    const handleEdit = (e)=>{
        navigate('/')
        const wordVlaue = wordV.current.value;
        const descVlaue = wordDesc.current.value;
        const exVlaue = wordEx.current.value;
        editWord(editWordMiddle(wordVlaue,descVlaue,exVlaue,id,date))
        e.preventDefault();
    }
    return(
        <AddWrap onSubmit={handleEdit}>
            <FormBox>
                <label htmlFor="word">
                    단어
                </label>
                <input id='word' defaultValue={word} type="text" ref={wordV}/>
            </FormBox>
            <FormBox>
                <label htmlFor="wordDesc">
                    설명
                </label>
                <input id='wordDesc' defaultValue={desc} type="text" ref={wordDesc}/>
            </FormBox>
            <FormBox>
                <label htmlFor="wordEx">
                    예시
                </label>
                <input id='wordEx' type="text"defaultValue={ex} ref={wordEx}/>
            </FormBox>
            <AddBtn onClick={handleEdit}>
                수정
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


export default EditWord
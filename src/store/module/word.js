import db from '../../service/firebase';
import apis from '../../service/firebaseApis';


const firebaseApis = new apis(db)

const LOAD = "word/LOAD";
const CREATE = 'word/CREATE';
const DELETE = "word/DELETE";
const EDIT = "word/EDIT";

const initialState = {
    wordList : [
]}

export const loadWord = (wordList) => {
    return { type: LOAD, wordList };
}

export const deleteWord = (id) =>{
    return {type: DELETE, id}
}

export const createWord = (word) => {
    return { type: CREATE, word };
}

export const editWord = (word)=>{
    return {type:EDIT , word}
}

//middle 미들웨어 부분

export const loadWordMiddle = () =>{
    return async (dispatch)=>{
        let wordList = null;
        await firebaseApis.getWord().then(item=>wordList = item)
        await wordList.sort((a,b)=>{return b.date-a.date})
        dispatch(loadWord(wordList))
    }
}

export const addWordMiddle = (word,desc,ex,id) =>{
    return async (dispatch)=>{
        await firebaseApis.addWord(word,desc,ex,id)
        dispatch(createWord(word,desc,ex,id))
    }
}

export const deleteWordMiddle = (id) =>{
    return async (dispatch)=>{
        await firebaseApis.deleteWord(id)
        dispatch(deleteWord(id))
    }
}

export const editWordMiddle = (word,desc,ex,id,date) =>{
    console.log(word,id,ex,desc)
    return async (dispatch)=>{
        await firebaseApis.editWord(word,desc,ex,id,date)
        dispatch(editWord(word))
}}



// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "word/LOAD":{
            return {wordList:action.wordList}
        }
        case "word/CREATE": {
            const newWord = [...state.wordList, {word:action.word[0],desc:action.word[1],ex:action.word[2]}]
            return {wordList:newWord};
        }
        case "word/DELETE":{
            const deleteWord = state.wordList.filter(word => word.id !=action.id)
            return {wordList:deleteWord}
        }
        default:
            return state;
    }
}
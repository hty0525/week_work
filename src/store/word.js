// word.js

// Actions
const CREATE = 'word/CREATE';
const LOAD = "word/LOAD";
const DELETE = "word/DELETE";

const initialState = {
    wordList : [
    {
        word : '자신만 아는 단어를',
        desc : '설명하고,',
        ex : '예시도 들어주세요!'
    }
]}

export const loadWord = (word) => {
    return { type: LOAD, word };
}

export const removeWord = (word) =>{
    return {type: DELETE, word}
}

export const createWord = (word) => {
    return { type: CREATE, word };
}
// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case  CREATE: {
            const newWord = [...state.wordList, {word:action.word[0],desc:action.word[1],ex:action.word[2]}]
            return {wordList:newWord};
        }
        default:
            return state;
    }
}
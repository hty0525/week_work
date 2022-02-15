import React from 'react'
import './App.css';
import MainWrap from './components/main/Main'
import { useDispatch} from 'react-redux';
import { loadWordMiddle } from './store/module/word';

const App = ()=> {
  const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(loadWordMiddle())
    }, [dispatch])
  return (
    <>
      <MainWrap/>
    </>
  );
}

export default App;

import './App.css'
import Effect from './Hooks/useEffect';
import Context from './Hooks/useContext';
import { RefDom, Ref } from './Hooks/useRef';
import Reduce from './Hooks/useReduce';
import Memo from './Hooks/useMemo';
import Callback from './Hooks/useCallBack';
import Custom from './Hooks/useCustom';

function App() {

  return (
    <>
     < Effect />
      <Context />
      <Ref />
      <RefDom />
      <Reduce />
      <Memo />
      <Callback />
      <Custom />
    </>
  )
}

export default App

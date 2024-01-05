import React,{ useState} from 'react'
import Navbar from './Navbar';

export default function State(props) {

const textAreaRef = React.createRef();
const [kv, setKv] = useState('');
const [summary, setSummary] = useState('');

const changeHeading = () => {
  setKv(textAreaRef.current.value);
};

const changeText = (event) => {
  setSummary(event.target.value);
};

return (
    <div className='container'>
      <h1>{kv}</h1>
      <textarea ref={textAreaRef} value={summary}  onChange={changeText}></textarea>
      <button className='btn btn-primary' onClick={changeHeading} >CHANGE</button>
      <p>your Text has {summary.split(" ").length} Words and {summary.length} Characters</p>
      {/* <Navbar kv={kv} />   */}
      </div>
    )
};

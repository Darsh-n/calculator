import {useState} from "react";
import {evaluate} from 'mathjs';
import * as math from 'mathjs';

import './App.css';
import Button from './component/Button';
import Input from './component/input';


function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) =>{
    setText((text) => [ ...text, val + ''])
  }

  const calculateResult = ()=>{
    const input = text.join('')   // remove commas

    setResult (math.evaluate(input)); 
  }

  const reset = () =>{
    setResult('')
    setText('')
  }

  return (
    <div className="App">
      
      <div className='calcy_Body'>
      <Input text={text} result={result}/>
        <div className='row'>
        <Button symbol={9} handleClick={addToText}/>
        <Button symbol={8}handleClick={addToText}/>
        <Button symbol={7}handleClick={addToText}/>
        <Button symbol='/' color="orange" handleClick={addToText}/>
        </div>
        <div className='row'>
        <Button symbol={6}handleClick={addToText} />
        <Button symbol={5}handleClick={addToText}/>
        <Button symbol={4}handleClick={addToText}/>
        <Button symbol='*' color="orange"handleClick={addToText}/>
        </div>
        <div className='row'>
        <Button symbol={3}handleClick={addToText}/>
        <Button symbol={2}handleClick={addToText}/>
        <Button symbol={1}handleClick={addToText}/>
        <Button symbol='+' color="orange"handleClick={addToText}/>
        </div>
        <div className='row'>
        <Button symbol={0}handleClick={addToText}/>
        <Button symbol='.'handleClick={addToText}/>
        <Button symbol='='handleClick={calculateResult} color="green"/>
        <Button symbol='-' color="orange"handleClick={addToText}/>
        </div>
        <Button symbol='Clear' color="red" handleClick={reset}/>
      </div>
      
    </div>
  );
}

export default App;

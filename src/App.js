
import './App.css';
import Button from './component/Button';
import Input from './component/input';

function App() {
  return (
    <div className="App">
      
      <div className='calcy_Body'>
      <Input/>
        <div className='row'>
        <Button symbol={9}/>
        <Button symbol={8}/>
        <Button symbol={7}/>
        <Button symbol='/' color="orange"/>
        </div>
        <div className='row'>
        <Button symbol={6} />
        <Button symbol={5}/>
        <Button symbol={4}/>
        <Button symbol='*' color="orange"/>
        </div>
        <div className='row'>
        <Button symbol={3}/>
        <Button symbol={2}/>
        <Button symbol={1}/>
        <Button symbol='+' color="orange"/>
        </div>
        <div className='row'>
        <Button symbol={0}/>
        <Button symbol='.'/>
        <Button symbol='='/>
        <Button symbol='-' color="orange"/>
        </div>
        <Button symbol='Clear' color="red"/>
      </div>
      
    </div>
  );
}

export default App;

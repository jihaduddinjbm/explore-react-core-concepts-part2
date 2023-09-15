
import './App.css'
import Counter from './Counter';
import Users from './Users';
import Friends from './friends';

function App() {

  function handleClick(){
    alert('you clicked me');
  }

  const handleClick2 = () =>{
    alert('click 2')
  }

  const addToFive = (num) =>{
       alert(num + 3)
  }
  

  return (
    <> 
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      {/* <button onClick={handleClick}>click me</button> */}
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() =>{alert('third here')}}>third</button>
      <button onClick={() => addToFive(7)}>four</button>
    </>
  )
}

export default App

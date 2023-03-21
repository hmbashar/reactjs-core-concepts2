import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const products = [
    { name: 'laptop', price: '56000' },
    { name: 'phone', price: '5000' },
    { name: 'watch', price: '15000' },
    { name: 'Computer', price: '105000' },
  ]
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      <Counter></Counter>


      {/* {        
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}

      {/* <Product name="Laptop" price="75000"></Product>
        <Product name="phone" price="17000"></Product>
        <Product name="Watch" price="7000"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(55);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div className='counter'>
      <h2>Counter {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}



function ExternalUsers() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <ul>
        {
          users.map(user => <DisplayUsers name={user.name} email={user.email}></DisplayUsers>)
        }
      </ul>

    </div>

  )
}

function DisplayUsers(props) {
  return (
    <div className='single-user'>
      <li>Name: {props.name} </li>
      <li>Email: {props.email} </li>
    </div>

  )
}

export default App;

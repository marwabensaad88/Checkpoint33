import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, layaout
} from 'reactstrap';


function App() {
  return (
    <div className="App">


      <form>

        <h1 style={{ backgroundColor: "lightblue" }}>Sign In</h1>
        <p>User Name:</p>
        <input
          type='text'
          name='username'

        />
        <p>Password:</p>
        <input
          type='text'
          name='age'

        />
        <br />
        <br />
        <Button style={{ backgroundColor: "lightblue" }}>Login</Button>
        <br />
        <br />
        <input
          type='checkbox'
          name='age'

        />Remenber Me <br /> <p style={{ paddingLeft: "20px" }}>Forgot Password?</p>
      </form>


    </div >
  );
}

export default App;

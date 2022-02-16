import React from 'react';
import './App.css';
import Form from './components/Form';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getCharacter } from './actions';



function App(props) {
  const { loading, error, getCharacter } = props; 
  
  useEffect(() => {
    getCharacter();
  }, []);
    

  return (
    <div className="App">
      <h1>Guild Wars Characters</h1>

      <Form/>

      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading, 
    error: state.error
  }
}

export default connect(mapStateToProps, { getCharacter })(App);
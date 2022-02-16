import React from 'react';
import './App.css';
import Form from './components/Form';
import { connect } from 'react-redux';

function App(props) {

  return (
    <div className="App">
      <h1>Guild Wars</h1>

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

export default connect(mapStateToProps)(App);
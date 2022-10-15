import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StyleProps } from './types'

function App() {
  return (
    <div style={styles.container}>
      <h1>Hello App!</h1>
    </div>
  );
}

const styles: StyleProps = {
    container: {
        color: 'blue'
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bgColor: 'gray.800'
      }
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
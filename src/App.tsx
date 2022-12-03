import './App.css';
import Main from './pages/Main/Main';
import { ChakraProvider  } from '@chakra-ui/react'
import { theme } from "./theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main/>
    </ChakraProvider>
  );
}

export default App;

import './styles/App.scss';
import Main from './pages/Main/Main';
import { ChakraProvider  } from '@chakra-ui/react'
import { theme } from "./styles/theme"
import { WindowContextProvider } from "./helpers/WindowContext"
 
function App() {
  return (
    <ChakraProvider theme={theme}>
      <WindowContextProvider>
        <Main/>
      </WindowContextProvider>
    </ChakraProvider>
  );
}

export default App;

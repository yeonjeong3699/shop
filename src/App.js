import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { AuthContextProvider } from './context/AuthConFirm';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      {/* <AuthContextProvider> */}
        <GlobalStyle />
        <Nav />
        <Outlet />
      {/* </AuthContextProvider> */}
    </>
  );
}

export default App;

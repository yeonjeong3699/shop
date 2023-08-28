import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Nav/>
      <Outlet/>
    </>
  );
}

export default App;

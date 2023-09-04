import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { AuthContextProvider } from './context/AuthConfirm';
import GlobalStyle from './style/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryclient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <AuthContextProvider>
          <GlobalStyle />
          <Nav />
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

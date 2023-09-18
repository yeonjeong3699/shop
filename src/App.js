import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { AuthContextProvider } from './context/AuthConFirm';
import GlobalStyle from './style/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AllItems from './pages/AllItems';
// import SliderItem from './components/SliderItem';

const queryclient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <AuthContextProvider>
          {/* <SliderItem/> */}
          <GlobalStyle />
          <Nav />

          <Routes>
            <Route path='/' element={<AllItems />} />
          </Routes>
          {/* 홈화면에서만 AllItems 페이지 보이게 하기. 적용하지 않을 경우 다른 페이지로 넘어가면 항상 AllItems 이 떠있고 그 밑으로 다른 페이지가 뜸 */}

          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

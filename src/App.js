import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { AuthContextProvider } from './context/AuthConFirm';
//부모 컴포넌트에서 사용하던 데이터를 자식 컴포넌트가 그대로 사용할 수 있다. (ex. 부모가 로그인 중이라면 자식도 로그인 유지)
import GlobalStyle from './style/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//외부에서 만든 데이터를 가지고 와줌. (ex. 구글계정 연동이면 로그인한 구글 계정의 이름, 이메일 등... 관리자 지정 시 관리자 구분도 가능)
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

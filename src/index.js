import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AllItems from './pages/AllItems';
import NewItem from './pages/NewItem';
import Cart from './pages/Cart';


/*
gh-pages로 연동하게 되면 주소 뒤에 /repository 이름이 붙게 된다. (ex. localhost:3000 -> localhost:3000/shop)
그러나 리액트의 기본 주소는 /로 되어 있기 때문에 경로가 달라지게 되는 것을 받아오지 못한다.


*/

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       { path: '/items', element: <AllItems /> },
//       { path: '/items/new', element: <NewItem /> },
//       { path: '/cart', element: <Cart /> }
//     ]
//   }
// ])

const basename = process.env.PUBLIC_URL; //자동으로 package.json 안에 설정한 homepage의 주소 명령어

const routes = [
  { path: '/', element: <App /> },
  { path: '/items', element: <AllItems /> },
  { path: '/items/new', element: <NewItem /> },
  { path: '/cart', element: <Cart /> }
]

const router = createBrowserRouter(routes, { basename: basename });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

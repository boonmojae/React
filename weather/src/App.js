import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    //비동기 처리를 최상단에 등록해서 안에 있는 모든곳에서 비동기를 사용할 수 있음
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />           {/* 홈페이지 */}
          <Route path='/:id' element={<Home />} />        {/* 도시별 페이지 */}
          <Route path='*' element={<Home />} />           {/* 404 - 맨 마지막에 */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

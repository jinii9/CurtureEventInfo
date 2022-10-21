
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MyPage from './components/MyPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/MyPage" element={<MyPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

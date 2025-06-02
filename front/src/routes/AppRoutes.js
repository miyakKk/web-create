import { Routes, Route } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import HistoryPage from '../pages/HistoryPage';
import Layout from '../components/Layout';
import SearchPage from '../pages/SearchPage';
import RegisterPage from '../pages/RegisterPage';
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* ログイン画面にはsidebarは表示させない */}
    <Route path="/login" element={<LoginPage />} />
    {/* 以下の画面にはsidebarを表示させる */}
    <Route element={<Layout />}>
      <Route path="/history" element={<HistoryPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Route>
    {/* NotFoundでもsidebarを表示させない */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
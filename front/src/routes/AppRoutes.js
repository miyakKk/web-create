import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
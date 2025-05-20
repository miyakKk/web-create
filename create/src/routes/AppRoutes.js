import { Routes, Route } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
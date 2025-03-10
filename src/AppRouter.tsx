import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router';

import History from './pages/History';

import Home from '@/pages/Home/Home';
import Profile from '@/pages/Profile/Profile';
import Header from '@/components/Header/Header';
import { Toaster } from '@/components/ui/sonner';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}

export default AppRouter;

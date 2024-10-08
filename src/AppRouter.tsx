import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
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
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default AppRouter;

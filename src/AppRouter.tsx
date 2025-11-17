import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router';

import Home from '@/pages/Home';
import Page1 from '@/pages/Page1';
import Page2 from '@/pages/Page2';
import Header from '@/components/Header/Header';
import { Toaster } from '@/components/ui/sonner';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}

export default AppRouter;

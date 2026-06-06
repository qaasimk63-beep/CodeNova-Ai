import { useMemo, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import GeneratorPage from './pages/GeneratorPage';
import TemplatesPage from './pages/TemplatesPage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import PricingPage from './pages/PricingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Layout from './components/Layout';
import { ThemeContext } from './hooks/useTheme';

function App() {
  const [isDark, setIsDark] = useState(true);
  const themeContextValue = useMemo(() => ({ isDark, toggleTheme: () => setIsDark((prev) => !prev) }), [isDark]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={isDark ? 'min-h-screen text-slate-100' : 'min-h-screen text-slate-900 bg-slate-50'}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/app" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="generator" element={<GeneratorPage />} />
            <Route path="templates" element={<TemplatesPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="pricing" element={<PricingPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { ScrollToTop } from './utils/utils';
import AdminDashboardLayout from './components/DashbaordLayout/AdminDashboard/AdminDashboardLayout';

// Auth pages
const SignIn = lazy(() => import('./pages/AuthPages/Login'));
const Signup = lazy(() => import('./pages/AuthPages/Signup'));
const ForgotPassword = lazy(() => import('./pages/AuthPages/ForgotPassword'));
const Otp = lazy(() => import('./pages/AuthPages/Otp'));
const ResetPassword = lazy(() => import('./pages/AuthPages/ResetPassword'));

// New dashboard pages
const DashboardHome = lazy(() => import('./pages/Dashboard/DashboardHome'));
const Salons = lazy(() => import('./pages/Dashboard/Salons'));
const Independents = lazy(() => import('./pages/Dashboard/Independents'));
const Users = lazy(() => import('./pages/Dashboard/Users'));
// const MonitorHiring = lazy(() => import('./pages/Dashboard/MonitorHiring'));
// const DisputeResolution = lazy(() => import('./pages/Dashboard/DisputeResolution'));
// const SystemManagement = lazy(() => import('./pages/Dashboard/SystemManagement'));
// const CommissionRevenue = lazy(() => import('./pages/Dashboard/CommissionRevenue'));
// const PayoutManagement = lazy(() => import('./pages/Dashboard/PayoutManagement'));
// const CreatePromotions = lazy(() => import('./pages/Dashboard/CreatePromotions'));
// const PushNotification = lazy(() => import('./pages/Dashboard/PushNotification'));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-gray-800 font-sans">Loading...</p>
    </div>
  </div>
);

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

/**
 * The main application component with optimized routing and lazy loading.
 */
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <ScrollToTop />
            <Routes>
              {/* Authentication routes */}
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/otp" element={<Otp />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* Admin Dashboard routes (with layout) */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard/*" element={<AdminDashboardLayout />}>
                  <Route index element={<DashboardHome />} />
                  <Route path="salons" element={<Salons />} />
                  <Route path="independents" element={<Independents />} />
                  <Route path="users" element={<Users />} />
                  {/* <Route path="monitor-hiring" element={<MonitorHiring />} />
                  <Route path="dispute-resolution" element={<DisputeResolution />} />
                  <Route path="system-management" element={<SystemManagement />} />
                  <Route path="commission-revenue" element={<CommissionRevenue />} />
                  <Route path="payout-management" element={<PayoutManagement />} />
                  <Route path="create-promotions" element={<CreatePromotions />} />
                  <Route path="push-notification" element={<PushNotification />} /> */}
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
}
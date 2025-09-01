import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./utils/utils";
import AdminDashboardLayout from "./components/DashbaordLayout/AdminDashboard/AdminDashboardLayout";

// Auth pages
const SignIn = lazy(() => import("./pages/AuthPages/Login"));
const Signup = lazy(() => import("./pages/AuthPages/Signup"));
const ForgotPassword = lazy(() => import("./pages/AuthPages/ForgotPassword"));
const Otp = lazy(() => import("./pages/AuthPages/Otp"));
const ResetPassword = lazy(() => import("./pages/AuthPages/ResetPassword"));

// Dashboard pages
const DashboardHome = lazy(() => import("./pages/Dashboard/DashboardHome"));
const Salons = lazy(() => import("./pages/Dashboard/Salons"));
const Independents = lazy(() => import("./pages/Dashboard/Independents"));
const Users = lazy(() => import("./pages/Dashboard/Users"));
const MonitorHiring = lazy(() => import("./pages/Dashboard/MonitorHiring"));
const DisputeResolution = lazy(() => import("./pages/Dashboard/DisputeResolution"));
const ContentManagement = lazy(() => import("./pages/Dashboard/ContentManagement"));
const CommissionRevenue = lazy(() => import("./pages/Dashboard/CommissionRevenue"));
const PayoutManagement = lazy(() => import("./pages/Dashboard/PayoutManagement"));
const CreatePromotions = lazy(() => import("./pages/Dashboard/CreatePromotions"));
const PushNotification = lazy(() => import("./pages/Dashboard/PushNotification"));
const Reports = lazy(() => import("./pages/Dashboard/Reports"));
const MonitorFeedback = lazy(() => import("./pages/Dashboard/MonitorFeedback"));
const UploadBlogs = lazy(() => import("./pages/Dashboard/UploadBlogs"));
const CustomerSupport = lazy(() => import("./pages/Dashboard/CustomerSupport"));
const AddPolicies = lazy(() => import("./pages/Dashboard/AddPolicies"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-gray-800 font-sans">Loading...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <ScrollToTop />
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/*" element={<AdminDashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="salons" element={<Salons />} />
            <Route path="independents" element={<Independents />} />
            <Route path="users" element={<Users />} />
            <Route path="monitor-hiring" element={<MonitorHiring />} />
            <Route path="dispute-resolution" element={<DisputeResolution />} />
            <Route path="content-management" element={<ContentManagement />} />
            <Route path="commission-revenue" element={<CommissionRevenue />} />
            <Route path="payout-management" element={<PayoutManagement />} />
            <Route path="create-promotions" element={<CreatePromotions />} />
            <Route path="push-notification" element={<PushNotification />} />
            <Route path="reports" element={<Reports />} />
            <Route path="monitor-feedback" element={<MonitorFeedback />} />
            <Route path="upload-blogs" element={<UploadBlogs />} />
            <Route path="customer-support" element={<CustomerSupport />} />
            <Route path="add-policies" element={<AddPolicies />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

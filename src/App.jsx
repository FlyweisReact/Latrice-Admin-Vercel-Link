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
const CreatePromotionForm = lazy(() => import("./components/CreatePromotions/CreatePromotionForm"));

// New Salon Action Pages
const AddSalon = lazy(() => import("./components/Salon/AddSalon"));
const EditSalon = lazy(() => import("./components/Salon/EditSalon"));
const ViewSalon = lazy(() => import("./components/Salon/ViewSalon"));
const WalletView = lazy(() => import("./components/Salon/WalletView"));

// Independent Action Pages
const AddIndependent = lazy(() => import("./components/Independents/AddIndependent"));
const EditIndependent = lazy(() => import("./components/Independents/EditIndependent"));
const ViewIndependent = lazy(() => import("./components/Independents/ViewIndependent"));
const WalletIndependent = lazy(() => import("./components/Independents/WalletIndependent"));

// New User Action Pages
const AddUser = lazy(() => import("./components/Users/AddUser"));
const EditUser = lazy(() => import("./components/Users/EditUser"));
const ViewUser = lazy(() => import("./components/Users/ViewUser"));

// New Customer Support Action Pages
const ViewSupportTicket = lazy(() => import("./components/CustomerSupport/ViewSupportTicket"));

const Settings = lazy(() => import("./pages/Dashboard/Settings"));

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
            <Route path="salons/edit/:id" element={<EditSalon />} />
            <Route path="salons/view/:id" element={<ViewSalon />} />
            <Route path="salons/wallet/:id" element={<WalletView />} />
            <Route path="salons/add" element={<AddSalon />} />

            <Route path="independents" element={<Independents />} />
            <Route path="independents/add" element={<AddIndependent />} />
            <Route path="independents/edit/:id" element={<EditIndependent />} />
            <Route path="independents/view/:id" element={<ViewIndependent />} />
            <Route path="independents/wallet/:id" element={<WalletIndependent />} />

            <Route path="users" element={<Users />} />
            <Route path="users/add" element={<AddUser />} />
            <Route path="users/edit/:id" element={<EditUser />} />
            <Route path="users/view/:id" element={<ViewUser />} />

            <Route path="monitor-hiring" element={<MonitorHiring />} />
            <Route path="dispute-resolution" element={<DisputeResolution />} />
            <Route path="content-management" element={<ContentManagement />} />
            <Route path="commission-revenue" element={<CommissionRevenue />} />
            <Route path="payout-management" element={<PayoutManagement />} />
            <Route path="create-promotions" element={<CreatePromotions />} />
            <Route path="create-promotions/add" element={<CreatePromotionForm />} />
            <Route path="push-notification" element={<PushNotification />} />
            <Route path="reports" element={<Reports />} />
            <Route path="monitor-feedback" element={<MonitorFeedback />} />
            <Route path="upload-blogs" element={<UploadBlogs />} />
            <Route path="customer-support" element={<CustomerSupport />} />
            <Route path="customer-support/view/:id" element={<ViewSupportTicket />} />
            <Route path="add-policies" element={<AddPolicies />} />

            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
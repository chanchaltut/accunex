import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WelcomeModal from './components/WelcomeModal';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';

// Lazy load non-critical pages
const AboutUs     = lazy(() => import('./pages/AboutUs'));
const Contact     = lazy(() => import('./pages/Contact'));
const Insights    = lazy(() => import('./pages/Insights'));
const PrivacyPolicy  = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

// Service pages (lazy)
const GSTServices          = lazy(() => import('./pages/services/GSTServices'));
const IncomeTax            = lazy(() => import('./pages/services/IncomeTax'));
const CompanyRegistration  = lazy(() => import('./pages/services/CompanyRegistration'));
const MSMERegistration     = lazy(() => import('./pages/services/MSMERegistration'));
const TDSCompliance        = lazy(() => import('./pages/services/TDSCompliance'));
const Accounting           = lazy(() => import('./pages/services/Accounting'));
const ROCCompliance        = lazy(() => import('./pages/services/ROCCompliance'));
const StartupServices      = lazy(() => import('./pages/services/StartupServices'));
const TaxNotices           = lazy(() => import('./pages/services/TaxNotices'));
const IECRegistration      = lazy(() => import('./pages/services/IECRegistration'));
const DSC                  = lazy(() => import('./pages/services/DSC'));
const Trademark            = lazy(() => import('./pages/services/Trademark'));
const FSSAI                = lazy(() => import('./pages/services/FSSAI'));
const ProjectReports       = lazy(() => import('./pages/services/ProjectReports'));

// Fallback for lazy-loaded routes
const PageLoader = () => (
  <div className="min-h-screen bg-[#0d1b2a] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-[#f4b942] border-t-transparent rounded-full animate-spin" />
      <p className="text-[#94a3b8] text-sm">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <WelcomeModal />
      <ScrollToTop />
      <Navbar />
      <FloatingCTA />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ─── MAIN ─── */}
          <Route path="/"                element={<Home />} />
          <Route path="/about"           element={<AboutUs />} />
          <Route path="/contact"         element={<Contact />} />
          <Route path="/blog"            element={<Insights />} />
          {/* Keep /insights as alias */}
          <Route path="/insights"        element={<Insights />} />
          <Route path="/privacy-policy"  element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* ─── SERVICE PAGES ─── */}
          <Route path="/services/gst-services"         element={<GSTServices />} />
          <Route path="/services/income-tax"           element={<IncomeTax />} />
          <Route path="/services/company-registration" element={<CompanyRegistration />} />
          <Route path="/services/msme-registration"    element={<MSMERegistration />} />
          <Route path="/services/tds-compliance"       element={<TDSCompliance />} />
          <Route path="/services/accounting"           element={<Accounting />} />
          <Route path="/services/roc-compliance"       element={<ROCCompliance />} />
          <Route path="/services/startup-services"     element={<StartupServices />} />
          <Route path="/services/tax-notices"          element={<TaxNotices />} />
          <Route path="/services/iec-registration"     element={<IECRegistration />} />
          <Route path="/services/dsc"                  element={<DSC />} />
          <Route path="/services/trademark"            element={<Trademark />} />
          <Route path="/services/fssai"                element={<FSSAI />} />
          <Route path="/services/project-reports"      element={<ProjectReports />} />

          {/* ─── FALLBACK (404) ─── */}
          <Route path="*" element={
            <div className="min-h-screen bg-[#0d1b2a] flex flex-col items-center justify-center px-4 text-center">
              <h1 className="text-[#f4b942] text-8xl font-extrabold mb-4">404</h1>
              <p className="text-white text-xl font-semibold mb-3">Page Not Found</p>
              <p className="text-[#94a3b8] text-sm mb-6">The page you're looking for doesn't exist.</p>
              <a href="/" className="bg-[#f4b942] text-[#0d1b2a] px-6 py-3 rounded-full font-bold hover:bg-[#d9a230] transition-colors">Go Home</a>
            </div>
          } />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;

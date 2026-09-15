
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Method from './components/Method';
import ABXPillars from './components/ABXPillars';
import Offers from './components/Offers';
import Stack from './components/Stack';
import Timeline from './components/Timeline';
import Training from './components/Training';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ZcalModal from './components/ZcalModal';
import EnrollmentModal from './components/EnrollmentModal';
import PrivacyModal from './components/PrivacyModal';

const App: React.FC = () => {
  const [isZcalOpen, setIsZcalOpen] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const openZcal = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsZcalOpen(true);
  };

  const openEnrollment = () => {
    setIsEnrollmentOpen(true);
  };

  const openPrivacy = () => {
    setIsPrivacyOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onOpenZcal={openZcal} />
      <main>
        <Hero onOpenZcal={openZcal} />
        <Method />
        <ABXPillars />
        <Offers onOpenZcal={openZcal} />
        <Stack />
        <Timeline />
        <Training onOpenEnroll={openEnrollment} />
        <FAQ />
      </main>
      <Footer onOpenPrivacy={openPrivacy} />
      <ZcalModal isOpen={isZcalOpen} onClose={() => setIsZcalOpen(false)} />
      <EnrollmentModal isOpen={isEnrollmentOpen} onClose={() => setIsEnrollmentOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Method from './components/Method';
import ABXPillars from './components/ABXPillars';
import Offers from './components/Offers';
import Stack from './components/Stack';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ZcalModal from './components/ZcalModal';
import PrivacyModal from './components/PrivacyModal';
import CookieBanner from './components/CookieBanner';
import ArticlePage from './components/ArticlePage';
import { slugFromPath } from './i18n';
import { SLUGS, type Slug } from './i18n/pages';

const App: React.FC = () => {
  const [isZcalOpen, setIsZcalOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const openZcal = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsZcalOpen(true);
  };

  const openPrivacy = () => {
    setIsPrivacyOpen(true);
  };

  const raw = slugFromPath();
  const slug = SLUGS.includes(raw as Slug) ? (raw as Slug) : null;

  const modals = (
    <>
      <ZcalModal isOpen={isZcalOpen} onClose={() => setIsZcalOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <CookieBanner onOpenPrivacy={openPrivacy} />
    </>
  );

  if (slug) {
    return (
      <>
        <ArticlePage slug={slug} onOpenZcal={openZcal} onOpenPrivacy={openPrivacy} />
        {modals}
      </>
    );
  }

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
        <FAQ />
      </main>
      <Footer onOpenPrivacy={openPrivacy} />
      {modals}
    </div>
  );
};

export default App;
